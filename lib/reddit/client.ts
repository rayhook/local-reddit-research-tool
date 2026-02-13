// lib/reddit/client.ts
import { getAccessToken } from "./auth";
import { checkRateLimit, recordRequest } from "./rate-limiter";
import type { RedditListingResponse } from "./types";

const REDDIT_OAUTH_BASE = "https://oauth.reddit.com";

export class RedditApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "RedditApiError";
  }
}

export async function redditGet<T = RedditListingResponse>(
  endpoint: string,
): Promise<T> {
  const status = await checkRateLimit();
  if (!status.allowed) {
    throw new RedditApiError(
      429,
      `Rate limit exceeded. Retry in ${Math.ceil((status.retryAfterMs ?? 0) / 1000)}s`,
    );
  }

  const token = await getAccessToken();

  const response = await fetch(`${REDDIT_OAUTH_BASE}${endpoint}`, {
    headers: {
      Authorization: `bearer ${token}`,
      "User-Agent": process.env.REDDIT_USER_AGENT!,
    },
  });

  await recordRequest(endpoint);

  if (response.status === 429) {
    const retryAfter = response.headers.get("Retry-After");
    throw new RedditApiError(
      429,
      `Reddit 429. Retry-After: ${retryAfter ?? "unknown"}s`,
    );
  }

  if (!response.ok) {
    throw new RedditApiError(
      response.status,
      `Reddit API error: ${response.status} on ${endpoint}`,
    );
  }

  return response.json() as Promise<T>;
}
