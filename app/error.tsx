'use client';
//! ERROR COMPONENT
import React from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.info(error);
  return (
    <>
      <div className="text-red-600 font-black text-3xl bg-red-200 mx-auto my-16 w-fit p-8 rounded-xl border-4 border-red-500">ERROR MESSAGE : {error.message}</div>
      <button onClick={reset} className="bg-yellow-600 text-white text-2xl font-bold mx-auto p-2 rounded">   RESET </button>
    </>
  );
};
export default Error;
