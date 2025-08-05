'use client';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const _productsFetcher = () => axios.get('https://fakestoreapi.com/products').then((res) => res.data);
function page() {
  const { data, isLoading, mutate, error } = useSWR('https://fakestoreapi.com/products', _productsFetcher);
  return (
    <div className="section">
      <div className="">
        {data?.map((item: any) => (
          <Link href={'/swr/fake-store/1'} className="my-2 block" key={item.id}>
            {item.id}.{item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
