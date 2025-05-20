'use client';
//! ERROR COMPONENT
import React from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  // console.info(error);
  return (
    <section className="w-screen h-screen flex items-center justify-center text-2xl font-black">
      <div className="bg-zinc-900 p-8 border-8 border-zinc-950 flex flex-col items-center justify-center gap-16 rounded-2xl">
        <h2>ERROR : </h2>

        <span className="bg-zinc-950 p-6 rounded text-red-800 font-bold text-3xl">{error.message}</span>

        <button onClick={reset} className="bg-black py-4 px-8 rounded-xl">
          Try Again
        </button>
      </div>
    </section>
  );
};
export default Error;
