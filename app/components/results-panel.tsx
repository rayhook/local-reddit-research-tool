// app/components/results-panel.tsx
"use client";

import { useState } from "react";
import type { SearchResult } from "@/lib/services/search-service";
import { PostCard } from "./post-card";

interface ResultsPanelProps {
  results: SearchResult[];
  selectedPosts: Set<number>;
  onSelectionChange: (s: Set<number>) => void;
  page: number;
  onPageChange: (p: number) => void;
}

export function ResultsPanel({
  results,
  selectedPosts,
  onSelectionChange,
  page,
  onPageChange,
}: ResultsPanelProps) {
  const [expandedSubs, setExpandedSubs] = useState<Set<string>>(
    new Set(results.map((r) => r.subreddit)),
  );

  const toggleExpand = (sub: string) => {
    setExpandedSubs((prev) => {
      const next = new Set(prev);
      if (next.has(sub)) next.delete(sub);
      else next.add(sub);
      return next;
    });
  };

  const togglePost = (id: number) => {
    onSelectionChange(
      new Set(
        selectedPosts.has(id)
          ? [...selectedPosts].filter((p) => p !== id)
          : [...selectedPosts, id],
      ),
    );
  };

  const selectAllInSub = (posts: SearchResult["posts"]) => {
    const ids = posts.map((p) => p.id);
    const allSelected = ids.every((id) => selectedPosts.has(id));
    const next = new Set(selectedPosts);
    for (const id of ids) {
      if (allSelected) next.delete(id);
      else next.add(id);
    }
    onSelectionChange(next);
  };

  const PAGE_SIZE = 25;

  if (results.every((r) => r.posts.length === 0)) {
    return (
      <div className="py-12 text-center text-gray-500">
        No posts matched your keywords. Try broader search terms.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((group) => (
        <div
          key={group.subreddit}
          className="rounded-lg border border-gray-200"
        >
          <button
            onClick={() => toggleExpand(group.subreddit)}
            className="flex w-full items-center justify-between bg-gray-50 px-4 py-3
                       text-left font-semibold transition hover:bg-gray-100"
          >
            <span>
              r/{group.subreddit}{" "}
              <span className="text-sm font-normal text-gray-500">
                ({group.posts.length} matches
                {group.fromCache ? " · cached" : " · fresh"})
              </span>
            </span>
            <span className="text-gray-400">
              {expandedSubs.has(group.subreddit) ? "▼" : "▶"}
            </span>
          </button>

          {expandedSubs.has(group.subreddit) && (
            <div className="space-y-3 p-4">
              <button
                onClick={() => selectAllInSub(group.posts)}
                className="text-sm text-blue-600 hover:underline"
              >
                {group.posts.every((p) => selectedPosts.has(p.id))
                  ? "Deselect All"
                  : "Select All"}
              </button>

              {group.posts
                .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
                .map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    selected={selectedPosts.has(post.id)}
                    onToggle={togglePost}
                  />
                ))}

              {group.posts.length > PAGE_SIZE && (
                <div className="flex items-center justify-center gap-2 pt-2">
                  <button
                    disabled={page <= 1}
                    onClick={() => onPageChange(page - 1)}
                    className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-500">
                    Page {page} of {Math.ceil(group.posts.length / PAGE_SIZE)}
                  </span>
                  <button
                    disabled={page >= Math.ceil(group.posts.length / PAGE_SIZE)}
                    onClick={() => onPageChange(page + 1)}
                    className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
