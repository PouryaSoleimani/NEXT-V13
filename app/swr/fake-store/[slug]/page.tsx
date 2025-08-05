'use client';
import axios from 'axios';
import { Params } from 'next/dist/server/request/params';
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

function page() {
  const params: Params = useParams();
  const _fetcher = () => axios.get(`https://fakestoreapi.com/products/${params.slug}`).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${params.slug}`, _fetcher);
  if (isLoading) {
    return;
  }
  return <div className="w-screen h-screen flex items-center justify-center overflow-hidden">{data?.title}</div>;
}

export default page;
