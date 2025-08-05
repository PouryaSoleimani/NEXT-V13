'use client';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { preload } from 'swr';
const _productsFetcher = () => axios.get('https://fakestoreapi.com/products').then((res) => res.data);
function page() {
  const { data, isLoading, mutate, error } = useSWR('https://fakestoreapi.com/products', _productsFetcher);
  if (isLoading)
    return (
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
        <p>LOADING ... </p>
        <LoaderCircle className="size-12 animate-spin text-yellow-500" />
      </div>
    );


  return (
    <div className="section">
      <div className="">
        {data?.map((item: any) => (
          <Link href={`/swr/fake-store/${item.id}`} className="my-2 block bg-black p-3 rounded-xl hover:border-b-4 border-b-yellow-500" key={item.id}>
            {item.id}.{item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
