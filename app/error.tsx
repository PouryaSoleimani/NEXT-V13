// app/error.tsx
"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

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
      <div className='bg-zinc-800/300 flex flex-col  justify-center items-center gap-3 w-200 h-100 backdrop-blur-2xl rounded-lg border border-zinc-800 shadow-md shadow-black'>
        <p className='text-red-500/70 bg-black p-3 rounded-lg flex items-center-safe gap-3'>
          <AlertTriangle className='text-red-500/70 text-xl' />
          {error.name}
        </p>
        <p className='text-stone-200 text-2xl tracking-tighter'>
          {error.message}
        </p>
        <Button
          onClick={() => reset()}
          className='w-fit my-6'>
          <RefreshCw />
          Try again
        </Button>
      </div>
    </div>
  );
}
