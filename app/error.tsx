//! app/error.tsx
"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { ErrorIcon } from "react-hot-toast";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // console.log("🟥🟥🟥 ERROR", error);

  return (
    <div className='w-screen h-screen flex font-bold items-center justify-center'>
      <div className='flex flex-col  justify-center items-center gap-3 w-200 h-100 backdrop-blur-2xl rounded-lg border-zinc-800'>
        <p className='text-red-500/70 text-3xl underline decoration-4 underline-offset-8 p-3 rounded-lg flex items-center-safe gap-3'>
          <AlertTriangle className='text-red-500/70 text-xl size-10' />
          {error.name}
        </p>
        <p className='text-stone-200 text-2xl pb-3 border-b-2 border-stone-500 tracking-tighter'>
          {error.message}
        </p>
        <div className="center my-3 w-[90%] bg-black p-2.5 rounded-md">
          <details className='min-sm:text-white w-full  mx-auto text-ellipsis overflow-hidden'>
            <summary className="flex gap-3 font-bold font-sans"><ErrorIcon />ERROR DETAILS </summary>
            <pre dir="ltr">{error.stack}</pre>
          </details>
        </div>
        <Button
          variant={'blue'}
          onClick={() => reset()}
          className='w-fit my-6'>
          <RefreshCw />
          Try again
        </Button>
      </div>
    </div>
  );
}
