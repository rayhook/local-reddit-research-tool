// lib/reddit/queue.ts
import { redditGet } from "./client";
import { checkRateLimit } from "./rate-limiter";
import type { RedditListingResponse, RedditPost } from "@/lib/reddit/types";

interface QueueItem {
  subreddit: string;
  resolve: (posts: RedditPost[]) => void;
  reject: (error: Error) => void;
}

const queue: QueueItem[] = [];
let processing = false;

async function fetchSubredditPosts(subreddit: string): Promise<RedditPost[]> {
  // 70% new (70 posts), 30% hot (30 posts)
  const [newResponse, hotResponse] = await Promise.all([
    redditGet<RedditListingResponse>(`/r/${subreddit}/new?limit=70&raw_json=1`),
    redditGet<RedditListingResponse>(`/r/${subreddit}/hot?limit=30&raw_json=1`),
  ]);

  const newPosts = newResponse.data.children.map((c) => c.data);
  const hotPosts = hotResponse.data.children.map((c) => c.data);

  // Deduplicate by reddit ID
  const seen = new Set<string>();
  const combined: RedditPost[] = [];
  for (const post of [...newPosts, ...hotPosts]) {
    if (!seen.has(post.id)) {
      seen.add(post.id);
      combined.push(post);
    }
  }

  return combined;
}

async function processQueue(): Promise<void> {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const item = queue[0];

    const status = await checkRateLimit();
    if (!status.allowed) {
      // Wait and retry
      await new Promise((r) => setTimeout(r, status.retryAfterMs ?? 5000));
      continue;
    }

    queue.shift();
    try {
      const posts = await fetchSubredditPosts(item.subreddit);
      item.resolve(posts);
    } catch (error) {
      item.reject(error instanceof Error ? error : new Error(String(error)));
    }
  }

  processing = false;
}

export function enqueueSubredditFetch(
  subreddit: string,
): Promise<RedditPost[]> {
  return new Promise((resolve, reject) => {
    queue.push({ subreddit, resolve, reject });
    processQueue();
  });
}

export function getQueueStatus(): {
  pending: number;
  subreddits: string[];
} {
  return {
    pending: queue.length,
    subreddits: queue.map((q) => q.subreddit),
  };
}
