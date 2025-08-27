"use client";
import React, { useState } from "react";
import PageComponent from "../swr-advanced.tsx/_components/Page.";
import InfiniteLoading from "../swr-advanced.tsx/_components/InfiniteLoading";

function Page() {
  const [index, setIndex] = useState<number>(1);

  return (
    // INFINITE LOADING
    // <div className="section flex-col gap-y-4">
    //   <PageComponent index={index} />
    //   <div className="center">
    //     <button onClick={() => setIndex((prev) => prev - 1)} className="btn">
    //       PREVIOUS
    //     </button>
    //     <button onClick={() => setIndex((prev) => prev + 1)} className="btn">
    //       NEXT
    //     </button>
    //   </div>
    // </div>
    <div className="section p-10">
      <InfiniteLoading />
    </div>
  );
}

export default Page;
