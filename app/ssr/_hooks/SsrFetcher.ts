import React from 'react'

export default async function SsrFetcher(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}
