// lib/services/cache-service.ts
import { prisma } from "../db/client";
import { Database } from "bun:sqlite";
import type { RedditPost } from "../reddit/types";

// Connect to the same DB file Prisma uses
const db = new Database("./prisma/reddit-miner.db", { strict: true });

// Prepared statement with named parameters ($prefix is required in the object keys)
const insertStmt = db.prepare(`
  INSERT OR IGNORE INTO Post (
    redditId, title, selftext, author, upvotes, createdUtc, url, subredditId, fetchedAt
  ) VALUES (
    $redditId, $title, $selftext, $author, $upvotes, $createdUtc, $url, $subredditId, $fetchedAt
  )
`);

// Transaction wrapper
const insertPosts = db.transaction((posts: Array<Record<string, unknown>>) => {
  for (const post of posts) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    insertStmt.run(post as any);
  }
});

const STALENESS_HOURS = 6;

export async function isSubredditFresh(
  subredditName: string,
): Promise<boolean> {
  const sub = await prisma.subreddit.findUnique({
    where: { name: subredditName.toLowerCase() },
    select: { lastFetchedAt: true },
  });

  if (!sub?.lastFetchedAt) return false;

  const ageMs = Date.now() - sub.lastFetchedAt.getTime();
  return ageMs < STALENESS_HOURS * 60 * 60 * 1000;
}

export async function upsertPosts(
  subredditName: string,
  posts: RedditPost[],
): Promise<void> {
  if (posts.length === 0) return;

  const normalizedName = subredditName.toLowerCase();

  const subreddit = await prisma.subreddit.upsert({
    where: { name: normalizedName },
    update: { lastFetchedAt: new Date() },
    create: { name: normalizedName, lastFetchedAt: new Date() },
  });

  // CRITICAL FIX: Object keys must match the $parameter names exactly
  const postData = posts.map((p) => ({
    $redditId: p.id, // Note the $ prefix
    $title: p.title,
    $selftext: p.selftext || "",
    $author: p.author,
    $upvotes: p.ups,
    $createdUtc: new Date(p.created_utc * 1000),
    $url: `https://reddit.com${p.permalink}`,
    $subredditId: subreddit.id,
    $fetchedAt: new Date(),
  }));

  insertPosts(postData);
}
