"use client";
import axios from "axios";
import { FileQuestionMark, LoaderCircle, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR, { Fetcher } from "swr";
type Product = { id: number; title: string };
function PageComponent({ index }: { index: number }) {
  console.info("index ===>", index);
  const _fetcher: Fetcher<Product, string> = () =>
    axios.get(`https://fakestoreapi.com/products/${index}`).then((res) => res.data);

  const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${index}`, _fetcher);

  console.info("data =>", data);

  if (isLoading) {
    return (
      <div className="section flex-col gap-8">
        <h2 className="flex items-center gap-2 text-white bg-black p-3 rounded-xl">
          <LoaderCircle className="animate-spin text-pink-500" /> LOADING
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
        <button
          onClick={() => location.reload()}
          className="bg-blue-900  cursor-pointer size-12 rounded-full flex items-center justify-center"
        >
          <RotateCcw />
        </button>
      </div>
    );
  }

  return (
    <div>
      {data.id} . {data.title}
    </div>
  );
}

export default PageComponent;
