// app/components/keyword-highlight.tsx
"use client";

/**
 * If the server returned FTS5 snippets with <mark> tags, render them.
 * Otherwise, do client-side keyword highlighting as fallback.
 */
export function KeywordHighlight({
  text,
  keywords,
  useSnippet,
}: {
  text: string;
  keywords?: string[];
  useSnippet?: boolean;
}) {
  // If snippet already has <mark> tags from FTS5
  if (useSnippet && text.includes("<mark>")) {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(
            /<mark>/g,
            '<mark class="bg-yellow-200 px-0.5 rounded">',
          ),
        }}
      />
    );
  }

  // Client-side fallback
  if (!keywords?.length) return <span>{text}</span>;

  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );

  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <mark
            key={i}
            className="rounded bg-yellow-200 px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
