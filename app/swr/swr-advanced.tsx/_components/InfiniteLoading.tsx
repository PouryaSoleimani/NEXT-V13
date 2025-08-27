"use client";
import React, { useEffect, useState } from "react";
import PageComponent from "./Page.";
import { useRouter } from "next/navigation";
import Link from "next/link";

const InfiniteLoading = () => {
  const [index, setIndex] = useState(1);
  const pages = [];
  for (let i = 1; i < index; i++) {
    pages.push(<PageComponent index={i} />);
  }
  const router = useRouter();
  useEffect(() => {
    router.prefetch("https://fakestoreapi.com/products/1");
  }, []);

  return (
    <div className="section flex-col gap-5 p-5">
      {pages}
      <button onClick={() => setIndex(index + 1)} className="btn m-10">
        Load More
      </button>
      <Link
        href={"/swr/swr-advanced.tsx"}
        className="underline hover:text-blue-600 transition-all duration-300"
      >
        ADVANCED PAGE
      </Link>
    </div>
  );
};

export default InfiniteLoading;
