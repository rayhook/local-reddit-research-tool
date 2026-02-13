// app/actions/search.ts
"use server";

import {
  executeSearch,
  type SearchResponse,
} from "@/lib/services/search-service";

export interface SearchFormState {
  data: SearchResponse | null;
  error: string | null;
}

export async function searchAction(
  _prev: SearchFormState,
  formData: FormData,
): Promise<SearchFormState> {
  try {
    const subredditsRaw = formData.get("subreddits") as string;
    const keywordsRaw = formData.get("keywords") as string;
    const page = parseInt(formData.get("page") as string) || 1;
    const sortBy =
      (formData.get("sortBy") as "upvotes" | "createdUtc") || "upvotes";

    if (!subredditsRaw?.trim() || !keywordsRaw?.trim()) {
      return {
        data: null,
        error: "Both subreddits and keywords are required.",
      };
    }

    const subreddits = subredditsRaw.split(",").filter(Boolean);
    const keywords = keywordsRaw.split(",").filter(Boolean);

    if (subreddits.length > 10) {
      return { data: null, error: "Maximum 10 subreddits per search." };
    }
    if (keywords.length > 50) {
      return { data: null, error: "Maximum 50 keywords per search." };
    }

    const data = await executeSearch(subreddits, keywords, page, sortBy);
    return { data, error: null };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected error during search";
    return { data: null, error: message };
  }
}
