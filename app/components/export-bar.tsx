// app/components/export-bar.tsx
"use client";

import type { SearchResult } from "@/lib/services/search-service";
import { useState } from "react";

interface ExportBarProps {
  selectedPosts: Set<number>;
  results: SearchResult[];
}

export function ExportBar({ selectedPosts, results }: ExportBarProps) {
  const [isExporting, setIsExporting] = useState(false);

  if (selectedPosts.size === 0) return null;

  // Extract keywords from the first result's snippet markers
  // Alternative: pass keywords through props from parent state
  const keywords: string[] = [];
  for (const result of results) {
    for (const post of result.posts) {
      const titleMatch = post.snippetTitle.match(/<mark>([^<]+)<\/mark>/g);
      if (titleMatch) {
        titleMatch.forEach((m) => {
          const kw = m.replace(/<\/?mark>/g, "").toLowerCase();
          if (!keywords.includes(kw)) keywords.push(kw);
        });
      }
    }
  }

  const handleExport = async () => {
    setIsExporting(true);

    try {
      const response = await fetch("/api/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postIds: Array.from(selectedPosts),
          keywords,
        }),
      });

      if (!response.ok) {
        throw new Error(`Export failed: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `reddit-complaints-${Date.now()}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export error:", error);
      alert("Export failed. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="mb-4 flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">
      <span className="text-sm text-blue-800">
        {selectedPosts.size} post{selectedPosts.size !== 1 ? "s" : ""} selected
        for export
      </span>

      <button
        onClick={handleExport}
        disabled={isExporting}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2
                   text-sm font-medium text-white transition hover:bg-blue-700
                   disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isExporting ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Exporting...
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export to CSV
          </>
        )}
      </button>
    </div>
  );
}
