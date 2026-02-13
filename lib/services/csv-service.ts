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

// Formula injection: Excel/LibreOffice treat leading =, +, -, @, \t, \r as formula
const FORMULA_START = /^[=+\-@\t\r]/;

function escapeCSV(value: string): string {
  const sanitized = value.replace(/\r\n|\r/g, "\n");
  if (FORMULA_START.test(sanitized) || sanitized.includes(",") || sanitized.includes('"') || sanitized.includes("\n")) {
    return `"${sanitized.replace(/"/g, '""')}"`;
  }
  return sanitized;
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
