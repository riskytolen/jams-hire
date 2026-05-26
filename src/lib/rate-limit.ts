/**
 * Rate limiter sederhana berbasis Map in-memory.
 * Cukup untuk MVP. Untuk production scale (multi-instance), upgrade ke Redis/Upstash.
 *
 * Limit: 1 submit per IP per 60 detik.
 */

interface Bucket {
  count: number;
  resetAt: number; // unix ms
}

const WINDOW_MS = 60_000; // 1 menit
const MAX_REQUESTS = 1;

// Module-level store. Akan di-reset saat server restart.
const buckets = new Map<string, Bucket>();

// Cleanup periodik supaya Map tidak bocor memori
let cleanupTimer: ReturnType<typeof setInterval> | null = null;
function startCleanup() {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt < now) buckets.delete(key);
    }
  }, 5 * 60_000); // setiap 5 menit
  // Pastikan tidak block process exit
  if (typeof cleanupTimer === "object" && cleanupTimer !== null && "unref" in cleanupTimer) {
    (cleanupTimer as { unref?: () => void }).unref?.();
  }
}

export function checkRateLimit(ip: string): { ok: true } | { ok: false; retryAfterSec: number } {
  startCleanup();
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX_REQUESTS) {
    const retryAfterSec = Math.ceil((bucket.resetAt - now) / 1000);
    return { ok: false, retryAfterSec };
  }

  bucket.count += 1;
  return { ok: true };
}
