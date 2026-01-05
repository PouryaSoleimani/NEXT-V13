"use server";
//^ SSR FETCHER HOOK

export type cache = "no-store" | "default" | "no-cache" | "force-cache";

export default async function useServerSideFetcher(url: string, cache: cache, revalidate?: number) {
  const res = await fetch(url, { cache: cache, next: revalidate ? { revalidate: revalidate } : undefined });
  const data = await res.json();

  if (!data) {
    throw new Error(" FETCH FAILED ... ");
  }

  return data;
}
