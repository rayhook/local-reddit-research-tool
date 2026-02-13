// app/components/rate-limit-banner.tsx
"use client";

interface Props {
  rateLimitStatus: {
    current: number;
    max: number;
    warningActive: boolean;
    monthlyUsage: number;
  };
  queueStatus: {
    pending: number;
    subreddits: string[];
  };
}

export function RateLimitBanner({ rateLimitStatus, queueStatus }: Props) {
  const pct = ((rateLimitStatus.current / rateLimitStatus.max) * 100).toFixed(
    0,
  );
  const monthlyPct = ((rateLimitStatus.monthlyUsage / 100_000) * 100).toFixed(
    1,
  );

  return (
    <div className="mb-4 space-y-2">
      {rateLimitStatus.warningActive && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-yellow-800">
          ⚠️ Rate limit approaching: {rateLimitStatus.current}/
          {rateLimitStatus.max} requests in window ({pct}%).
          {queueStatus.pending > 0 &&
            ` ${queueStatus.pending} subreddit(s) queued: ${queueStatus.subreddits.join(", ")}`}
        </div>
      )}

      <div className="flex gap-4 text-xs text-gray-500">
        <span>
          Window: {rateLimitStatus.current}/{rateLimitStatus.max}
        </span>
        <span>
          Monthly: {rateLimitStatus.monthlyUsage.toLocaleString()}/100,000 (
          {monthlyPct}%)
        </span>
      </div>
    </div>
  );
}
