// Shared helper for every _data/*.js fetch function. Builds the CMS API URL
// for a collection, but throws synchronously (before fetch() is ever called)
// if NEXT_PUBLIC_CMS_BASE_URL isn't configured. Without this guard, the
// template literal produces an unparseable URL string like
// "undefined/api/content/x?_published=true" — passing that straight to
// fetch() reliably hung the entire `next build` (Turbopack's fetch/Data
// Cache instrumentation never resolves the rejection), rather than just
// rejecting fast like a normal network error does. Every caller already has
// a try/catch that falls back to hardcoded data, so throwing here routes
// through the exact same fallback path a network failure would.
export function cmsUrl(collection) {
  const base = process.env.NEXT_PUBLIC_CMS_BASE_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_CMS_BASE_URL is not configured");
  }
  return `${base}/api/content/${collection}?_published=true`;
}
