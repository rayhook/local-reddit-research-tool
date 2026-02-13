// app/components/search-form.tsx
"use client";

import { useActionState, useState } from "react";
import { searchAction, type SearchFormState } from "@/app/actions/search";
import { ResultsPanel } from "@/app/components/results-panel";
import { RateLimitBanner } from "@/app/components/rate-limit-banner";
import { ExportBar } from "@/app/components/export-bar";

const initialState: SearchFormState = { data: null, error: null };

export function SearchForm() {
  const [state, formAction, isPending] = useActionState(
    searchAction,
    initialState,
  );
  const [sortBy, setSortBy] = useState<"upvotes" | "createdUtc">("upvotes");
  const [page, setPage] = useState(1);
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());

  return (
    <div>
      <form
        action={formAction}
        className="mb-8 space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="subreddits"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Subreddits (comma-separated)
            </label>
            <input
              type="text"
              id="subreddits"
              name="subreddits"
              placeholder="SaaS, startups, smallbusiness"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="keywords"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Keywords (comma-separated)
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="frustrated, annoying, broken, hate, wish"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <select
            name="sortBy"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "upvotes" | "createdUtc")
            }
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="upvotes">Sort by Upvotes</option>
            <option value="createdUtc">Sort by Newest</option>
          </select>

          <input
            type="hidden"
            name="page"
            value={page}
          />

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium
                       text-white transition hover:bg-blue-700
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Searching…" : "Search Reddit"}
          </button>
        </div>
      </form>

      {state.error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          {state.error}
        </div>
      )}

      {state.data && (
        <>
          <RateLimitBanner
            rateLimitStatus={state.data.rateLimitStatus}
            queueStatus={state.data.queueStatus}
          />

          <ExportBar
            selectedPosts={selectedPosts}
            results={state.data.results}
          />

          <ResultsPanel
            results={state.data.results}
            selectedPosts={selectedPosts}
            onSelectionChange={setSelectedPosts}
            page={page}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
