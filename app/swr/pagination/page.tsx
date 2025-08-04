'use client';
import React, { useState } from 'react';
import PageComponent from '../swr-advanced.tsx/_components/Page.';

function Page() {
  const [index, setIndex] = useState<number>(1);

  return (
    <div className="section flex-col gap-y-4">
      <PageComponent index={index} />
      <div className="center">
        <button onClick={() => setIndex((prev) => prev - 1)} className="btn">
          PREVIOUS
        </button>
        <button onClick={() => setIndex((prev) => prev + 1)} className="btn">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Page;
