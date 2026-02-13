// app/api/export/route.ts
import { NextRequest } from "next/server";
import { prisma } from "@/lib/db/client";
import { CSV_HEADER, formatPostAsCsvRow } from "@/lib/services/csv-service";

export async function POST(request: NextRequest) {
  const { postIds, keywords } = (await request.json()) as {
    postIds: number[];
    keywords: string[];
  };

  if (!postIds?.length) {
    return new Response("No posts selected", { status: 400 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Write CSV header
      controller.enqueue(encoder.encode(CSV_HEADER));

      // Stream posts in batches of 50 to avoid memory spikes
      const BATCH_SIZE = 50;
      for (let i = 0; i < postIds.length; i += BATCH_SIZE) {
        const batch = postIds.slice(i, i + BATCH_SIZE);

        const posts = await prisma.post.findMany({
          where: { id: { in: batch } },
          include: { subreddit: { select: { name: true } } },
        });

        for (const post of posts) {
          // Determine which keywords matched
          const lowerTitle = post.title.toLowerCase();
          const lowerText = post.selftext.toLowerCase();
          const matched = keywords.filter(
            (k) =>
              lowerTitle.includes(k.toLowerCase()) ||
              lowerText.includes(k.toLowerCase()),
          );

          const row = formatPostAsCsvRow({
            subreddit: post.subreddit.name,
            title: post.title,
            url: post.url,
            upvotes: post.upvotes,
            createdUtc: post.createdUtc,
            selftext: post.selftext,
            matchedKeywords: matched,
          });

          controller.enqueue(encoder.encode(row));
        }
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="reddit-complaints-${Date.now()}.csv"`,
    },
  });
}
