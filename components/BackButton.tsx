"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  function backhandler() {
    router.back();
  }
  return (
    <button
      onClick={backhandler}
      className='bg-sky-700 px-4 py-2 rounded mx-auto my-10'>
      BACK
    </button>
  );
};

export default BackButton;
