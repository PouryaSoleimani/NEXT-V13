"use client";
//^ CLIENT SIDE FETCHER HOOK
import axios from "axios";
import useSWR from "swr";

//^ HOOK
export default function useClientSideFetcher(url: string) {
  const fetcher = () =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => err.message);

  const { data, isLoading, error, mutate } = useSWR(url, fetcher, {
    refreshInterval: 5000,
    errorRetryCount: 5,
  });

  return { data, isLoading, error, mutate };
}
