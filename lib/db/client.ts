// lib/db/client.ts

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL ?? "file:./prisma/reddit-miner.db",
  });

  const client = new PrismaClient({ adapter });

  client
    .$executeRawUnsafe("PRAGMA journal_mode = WAL;")
    .then(() => client.$executeRawUnsafe("PRAGMA busy_timeout = 5000;"))
    .then(() => client.$executeRawUnsafe("PRAGMA synchronous = NORMAL;"))
    .then(() => client.$executeRawUnsafe("PRAGMA cache_size = -20000;"))
    .then(() => client.$executeRawUnsafe("PRAGMA foreign_keys = ON;"))
    .catch(console.error);

  return client;
}

// Singleton: prevents multiple PrismaClient instances during HMR
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
