// lib/reddit/types.ts
export interface RedditPost {
  id: string;
  title: string;
  selftext: string;
  author: string;
  ups: number;
  created_utc: number;
  permalink: string;
  subreddit: string;
  url: string;
  name: string; // fullname, e.g., "t3_abc123"
}

export interface RedditListingResponse {
  kind: "Listing";
  data: {
    after: string | null;
    children: Array<{
      kind: "t3";
      data: RedditPost;
    }>;
  };
}
