// lib/reddit/auth.ts

interface RedditToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  obtained_at: number; // Date.now()
}

let cachedToken: RedditToken | null = null;

export async function getAccessToken(): Promise<string> {
  // Return cached if still valid (with 5-min buffer)
  if (
    cachedToken &&
    Date.now() - cachedToken.obtained_at < (cachedToken.expires_in - 300) * 1000
  ) {
    return cachedToken.access_token;
  }

  const credentials = btoa(
    `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`,
  );

  const response = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": process.env.REDDIT_USER_AGENT!,
    },
    body: new URLSearchParams({
      grant_type: "password",
      username: process.env.REDDIT_USERNAME!,
      password: process.env.REDDIT_PASSWORD!,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Reddit OAuth failed: ${response.status} — ${text}`);
  }

  const data = (await response.json()) as RedditToken;
  cachedToken = { ...data, obtained_at: Date.now() };
  return cachedToken.access_token;
}
