// lib/services/search-service.ts
import { prisma } from "../db/client";
import { enqueueSubredditFetch, getQueueStatus } from "../reddit/queue";
import { checkRateLimit, getMonthlyUsage } from "../reddit/rate-limiter";
import { isSubredditFresh, upsertPosts } from "./cache-service";
import { searchPostsFts, type FtsResult } from "../db/fts-query";

export interface SearchResult {
  subreddit: string;
  posts: Array<{
    id: number;
    redditId: string;
    title: string;
    selftext: string;
    author: string;
    upvotes: number;
    createdUtc: Date;
    url: string;
    snippetTitle: string;
    snippetSelftext: string;
  }>;
  fromCache: boolean;
  total: number;
}

export interface SearchResponse {
  results: SearchResult[];
  rateLimitStatus: {
    current: number;
    max: number;
    warningActive: boolean;
    monthlyUsage: number;
  };
  queueStatus: { pending: number; subreddits: string[] };
}

export async function executeSearch(
  subreddits: string[],
  keywords: string[],
  page: number = 1,
  sortBy: "upvotes" | "createdUtc" = "upvotes",
): Promise<SearchResponse> {
  const normalizedSubs = subreddits.map((s) => s.trim().toLowerCase());
  const normalizedKeywords = keywords.map((k) => k.trim().toLowerCase());

  // Log search query
  await prisma.searchQuery.create({
    data: {
      keywords: normalizedKeywords.join(","),
      subreddits: normalizedSubs.join(","),
    },
  });

  // Check cache and fetch stale subreddits
  const fetchPromises: Promise<void>[] = [];

  for (const sub of normalizedSubs) {
    const fresh = await isSubredditFresh(sub);
    if (!fresh) {
      fetchPromises.push(
        enqueueSubredditFetch(sub).then((posts) => upsertPosts(sub, posts)),
      );
    }
  }

  // Wait for all fetches to complete (they're queued through rate limiter)
  await Promise.allSettled(fetchPromises);

  // Get subreddit IDs
  const subredditRecords = await prisma.subreddit.findMany({
    where: { name: { in: normalizedSubs } },
  });

  // Query FTS5
  const subredditIds = subredditRecords.map((s) => s.id);
  const { posts, total } = await searchPostsFts(
    normalizedKeywords,
    subredditIds,
    page,
    25,
    sortBy,
  );

  // Group by subreddit
  const grouped = new Map<string, SearchResult>();

  for (const sub of subredditRecords) {
    grouped.set(sub.name, {
      subreddit: sub.name,
      posts: [],
      fromCache: !fetchPromises.length,
      total: 0,
    });
  }

  for (const post of posts) {
    const subRecord = subredditRecords.find(
      (s) => s.id === (post as unknown as { subredditId: number }).subredditId,
    );
    if (subRecord && grouped.has(subRecord.name)) {
      grouped.get(subRecord.name)!.posts.push({
        id: post.id,
        redditId: post.redditId,
        title: post.title,
        selftext: post.selftext,
        author: post.author,
        upvotes: post.upvotes,
        createdUtc: post.createdUtc,
        url: post.url,
        snippetTitle: post.snippet_title ?? post.title,
        snippetSelftext: post.snippet_selftext ?? post.selftext.slice(0, 200),
      });
    }
  }

  for (const result of grouped.values()) {
    result.total = result.posts.length;
  }

  const rateStatus = await checkRateLimit();
  const monthlyUsage = await getMonthlyUsage();

  return {
    results: Array.from(grouped.values()),
    rateLimitStatus: {
      current: rateStatus.current,
      max: rateStatus.max,
      warningActive: rateStatus.warningActive,
      monthlyUsage,
    },
    queueStatus: getQueueStatus(),
  };
}
