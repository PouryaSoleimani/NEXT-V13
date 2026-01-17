//^ PRODUCT NOT FOUND
"use client";
import { AlertTriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

//COMPONENT
export default function Page() {
  const route = useRouter();
  function backHandler() {
    route.back();
  }

  //RETURN
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center text-4xl space-y-6 '>
      <h2 className='bg-red-800/30 flex items-center-safe rounded-lg gap-3 w-fit px-8 py-4 font-bold '>
        <AlertTriangleIcon className='size-8' />
        Product Not Found
      </h2>
      <p className='mt-4 tracking-tighter text-[14px] '>
        Could not find requested Product , Try checking your spell checking and
        Try again ...
      </p>
      <button
        className='bg-blue-400/20 rounded-lg px-8 py-2 cursor-pointer transition-all duration-500 hover:bg-blue-500'
        onClick={backHandler}>
        BACK
      </button>
    </div>
  );
}
