// lib/reddit/rate-limiter.ts
import { prisma } from "../db/client";

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 1000; // 100 QPM × 10 min
const WARNING_THRESHOLD = 0.8; // Warn at 80%

// In-memory sliding window log
const requestTimestamps: number[] = [];

// Rehydrate from SQLite on first load
let rehydrated = false;

async function rehydrate(): Promise<void> {
  if (rehydrated) return;
  rehydrated = true;

  const windowStart = new Date(Date.now() - WINDOW_MS);
  const recentCalls = await prisma.apiCall.findMany({
    where: { timestamp: { gte: windowStart } },
    select: { timestamp: true, count: true },
  });

  for (const call of recentCalls) {
    for (let i = 0; i < call.count; i++) {
      requestTimestamps.push(call.timestamp.getTime());
    }
  }
}

function pruneOldEntries(): void {
  const cutoff = Date.now() - WINDOW_MS;
  while (requestTimestamps.length > 0 && requestTimestamps[0] < cutoff) {
    requestTimestamps.shift();
  }
}

export interface RateLimitStatus {
  allowed: boolean;
  current: number;
  max: number;
  retryAfterMs: number | null;
  warningActive: boolean;
}

export async function checkRateLimit(): Promise<RateLimitStatus> {
  await rehydrate();
  pruneOldEntries();

  const current = requestTimestamps.length;
  const warningActive = current >= MAX_REQUESTS_PER_WINDOW * WARNING_THRESHOLD;

  if (current >= MAX_REQUESTS_PER_WINDOW) {
    const oldestInWindow = requestTimestamps[0];
    const retryAfterMs = oldestInWindow + WINDOW_MS - Date.now();
    return {
      allowed: false,
      current,
      max: MAX_REQUESTS_PER_WINDOW,
      retryAfterMs: Math.max(0, retryAfterMs),
      warningActive: true,
    };
  }

  return {
    allowed: true,
    current,
    max: MAX_REQUESTS_PER_WINDOW,
    retryAfterMs: null,
    warningActive,
  };
}

export async function recordRequest(endpoint: string): Promise<void> {
  const now = Date.now();
  requestTimestamps.push(now);

  // Persist to SQLite (batched — one row per endpoint per second)
  await prisma.apiCall.create({
    data: {
      endpoint,
      timestamp: new Date(now),
      count: 1,
    },
  });
}

export async function getMonthlyUsage(): Promise<number> {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const result = await prisma.apiCall.aggregate({
    _sum: { count: true },
    where: { timestamp: { gte: startOfMonth } },
  });

  return result._sum.count ?? 0;
}

// Flush interval: periodically prune old ApiCall rows (older than 10 min)
// to prevent SQLite bloat. Run as side-effect on import.
if (typeof globalThis !== "undefined") {
  const FLUSH_INTERVAL = 60_000; // 1 minute
  const globalKey = "__rateLimiterFlush" as keyof typeof globalThis;
  if (!globalThis[globalKey]) {
    (globalThis as Record<string, unknown>)[globalKey as string] = setInterval(
      async () => {
        const cutoff = new Date(Date.now() - WINDOW_MS);
        await prisma.apiCall
          .deleteMany({ where: { timestamp: { lt: cutoff } } })
          .catch(() => {}); // Ignore errors during cleanup
      },
      FLUSH_INTERVAL,
    );
  }
}
