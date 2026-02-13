// lib/db/fts-query.ts
import { prisma } from "./client";
import type { Post } from "@/generated/prisma/client";

interface FtsResult extends Post {
  rank: number;
  snippet_title: string;
  snippet_selftext: string;
}

export async function searchPostsFts(
  keywords: string[],
  subredditIds: number[],
  page: number = 1,
  pageSize: number = 25,
  sortBy: "upvotes" | "createdUtc" = "upvotes",
): Promise<{ posts: FtsResult[]; total: number }> {
  // FTS5 query: OR-join keywords, quote each to prevent injection
  const ftsQuery = keywords
    .map((k) => `"${k.replace(/"/g, '""')}"`)
    .join(" OR ");

  const offset = (page - 1) * pageSize;
  const orderCol =
    sortBy === "upvotes" ? "p.upvotes DESC" : "p.createdUtc DESC";
  const subFilter =
    subredditIds.length > 0
      ? `AND p.subredditId IN (${subredditIds.join(",")})`
      : "";

  const posts = await prisma.$queryRawUnsafe<FtsResult[]>(
    `
    SELECT
      p.*,
      f.rank,
      snippet(post_fts, 0, '<mark>', '</mark>', '…', 32) AS snippet_title,
      snippet(post_fts, 1, '<mark>', '</mark>', '…', 32) AS snippet_selftext
    FROM post_fts f
    JOIN Post p ON p.id = f.rowid
    WHERE post_fts MATCH ?
    ${subFilter}
    ORDER BY ${orderCol}
    LIMIT ? OFFSET ?
    `,
    ftsQuery,
    pageSize,
    offset,
  );

  const countResult = await prisma.$queryRawUnsafe<[{ cnt: bigint }]>(
    `
    SELECT COUNT(*) as cnt
    FROM post_fts f
    JOIN Post p ON p.id = f.rowid
    WHERE post_fts MATCH ?
    ${subFilter}
    `,
    ftsQuery,
  );

  return { posts, total: Number(countResult[0].cnt) };
}
