'use server'
//^ SSR FETCHER HOOK

export type cache = "no-store" | "default" | "no-cache";

export default async function useServerSideFetcher(url: string, cache: cache) {
  const res = await fetch(url, { cache: cache });
  const data = await res.json();
  if (!data) {
    throw new Error("Fetch Failed");
  }
  return data;
}
 