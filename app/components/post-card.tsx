// app/components/post-card.tsx
"use client";

import { KeywordHighlight } from "./keyword-highlight";

interface PostCardProps {
  post: {
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
  };
  selected: boolean;
  onToggle: (id: number) => void;
  keywords?: string[];
}

export function PostCard({
  post,
  selected,
  onToggle,
  keywords,
}: PostCardProps) {
  const dateStr = new Date(post.createdUtc).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 transition hover:shadow-sm">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggle(post.id)}
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded bg-orange-100 px-2 py-0.5 text-sm font-medium text-orange-700">
              ▲ {post.upvotes}
            </span>
            <span className="text-sm text-gray-500">{dateStr}</span>
            <span className="text-sm text-gray-400">by u/{post.author}</span>
          </div>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 block font-semibold text-gray-900 hover:text-blue-600"
          >
            <KeywordHighlight
              text={post.snippetTitle}
              keywords={keywords}
              useSnippet
            />
          </a>

          {post.snippetSelftext && (
            <p className="line-clamp-3 text-sm text-gray-600">
              <KeywordHighlight
                text={post.snippetSelftext}
                keywords={keywords}
                useSnippet
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
