// lib/db/seed.ts
import { prisma } from "./client";

async function seed() {
  await prisma.subreddit.createMany({
    data: [{ name: "SaaS" }, { name: "startups" }, { name: "smallbusiness" }],
    skipDuplicates: true,
  });

  console.log("✅ Seed complete.");
}

seed().finally(() => prisma.$disconnect());
