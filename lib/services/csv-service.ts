// lib/services/csv-service.ts

interface ExportablePost {
  subreddit: string;
  title: string;
  url: string;
  upvotes: number;
  createdUtc: Date;
  selftext: string;
  matchedKeywords?: string[];
}

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const CSV_HEADER =
  "subreddit,post_title,post_url,upvotes,created_date,keyword_matched,selftext_snippet\n";

export function formatPostAsCsvRow(post: ExportablePost): string {
  return (
    [
      escapeCSV(post.subreddit),
      escapeCSV(post.title),
      escapeCSV(post.url),
      String(post.upvotes),
      new Date(post.createdUtc).toISOString().split("T")[0],
      escapeCSV((post.matchedKeywords ?? []).join("; ")),
      escapeCSV(post.selftext.slice(0, 200)),
    ].join(",") + "\n"
  );
}

export { CSV_HEADER };
