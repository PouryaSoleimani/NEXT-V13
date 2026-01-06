interface Props {
  url: string;
  cache: "no-store" | "default" | "force-cache";
  revalidate?: number;
}

const useServerSideFetcher = async ({ url, cache, revalidate }: Props) => {
  const res = await fetch(url, { cache: cache, next: { revalidate: revalidate ? revalidate : undefined } });
  const data = await res.json();
  return data;
};

export default useServerSideFetcher;