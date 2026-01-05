// LOADING COMPONENT
import { Loader2Icon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='bg-zinc-900 p-3 font-mono font-bold flex items-center-safe justify-center gap-3 text-xl rounded-xl mx-auto my-32'>
        <Loader2Icon className='animate-spin' />
        Loading , Please Wait
      </div>
      ;
    </section>
  );
};

export default Loading;
