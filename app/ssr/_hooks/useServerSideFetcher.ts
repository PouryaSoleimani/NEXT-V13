'use server'
//& SSR FETCHER HOOK
export default async function useServerSideFetcher(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  if (!data) {
    throw new Error("Fetch Failed");
  }
  return data;
}
