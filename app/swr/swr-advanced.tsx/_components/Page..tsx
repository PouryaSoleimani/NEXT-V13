'use client';
import axios from 'axios';
import { FileQuestionMark, LoaderCircle, RotateCcw } from 'lucide-react';
import React from 'react';
import useSWR from 'swr';
function PageComponent(index: any) {

  const fetcher = () => axios.get(`https://fakestoreapi.com/products/${index}`).then((res) => res.data);

  const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${index}`, fetcher);

  console.info('data =>', data);
  
  if (isLoading) {
    return (
      <div className="section flex-col gap-8">
        <h2 className="flex items-center gap-2 text-blue-900 bg-black p-3 rounded-xl">
          <LoaderCircle className="animate-spin" /> LOADING
        </h2>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="section flex-col gap-8">
        <h2 className="flex items-center gap-2 text-red-900 bg-black p-3 rounded-xl">
          <FileQuestionMark /> ERROR
        </h2>
        <button className="bg-blue-900 size-12 rounded-full flex items-center justify-center">
          <RotateCcw />
        </button>
      </div>
    );
  }

  
  return data.map((item : any) => <div key={item.id}>{item.name}</div>);
}

export default PageComponent;
