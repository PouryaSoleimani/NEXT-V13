"use client";
import axios from "axios";
import { FileQuestionMark, LoaderCircle, RotateCcw } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

function PaginationSwr() {
  const [page, setPage] = useState(1);
  const [isValid, setIsValid] = useState<boolean>(false);

  const SingleProductFetcher = () => axios.get(`https://fakestoreapi.com/products/${page}`).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${page}`, SingleProductFetcher);

  useEffect(() => {
    if (page == 1) {
      setIsValid(false);
    }
    console.info("PAGE ==>", page);
  }, [page]);

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
        <button onClick={() => setPage(1)} className="bg-blue-900 size-12 rounded-full flex items-center justify-center">
          <RotateCcw />
        </button>
      </div>
    );
  }
  return (
    <div className="section flex-col gap-10">
      <div className="bg-black p-6 rounded-xl border-b-8 border-zinc-500">
        {data?.id} . {data?.title} : {data?.price}
      </div>
      <div className="flex gap-5 justify-center bg-zinc-800 w-fit mx-auto p-4 rounded-xl">
        <button
          className={`bg-black p-3 rounded-xl ${!isValid ? "opacity-50" : ""}`}
          disabled={!isValid}
          onClick={() => {
            if (+page <= 1) {
              return;
            } else {
              setIsValid(true);
              setPage((prev) => prev - 1);
            }
          }}
        >
          {"< "}PREV
        </button>
        <button
          className="bg-black p-3 rounded-xl"
          onClick={() => {
            setPage((prev) => prev + 1);
            setIsValid(true);
          }}
        >
          NEXT {" >"}
        </button>
      </div>
    </div>
  );
}

export default PaginationSwr;
