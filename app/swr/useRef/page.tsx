"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RefreshCcwDotIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const useRefComponent = () => {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='section'>
      <h1
        id='HEADING__ELEMENT'
        onMouseEnter={() => {
          console.info(h1Ref.current);
          pRef.current?.setHTMLUnsafe("YOU HOVERED");
          pRef.current?.classList.add("bg-blue-500");
          pRef.current?.classList.add("p-3");
          pRef.current?.classList.add("rounded-lg");
          buttonRef.current?.click();
        }}
        ref={h1Ref}
        className='bg-yellow-500 text-black p-3 rounded-lg'>
        REF
      </h1>
      <p
        className='mt-10'
        ref={pRef}></p>
      {/* FORM */}
      <form className='border mt-5 flex flex-col gap-3 p-3 rounded-lg border-blue-500'>
        <input
          ref={inputRef}
          type='text'
          placeholder='text'
          className='bg-white p-3 rounded-lg border border-blue-500 text-stone-900 placeholder:text-stone-500'
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(`CLICKED => ${inputRef?.current?.value.toString()}`);
          }}
          ref={buttonRef}
          variant={"blue"}
          type='submit'>
          SUBMIT
        </Button>
      </form>
      <Separator className='my-4 bg-stone-900' />
      <Button
        variant={"lime"}
        onClick={() => router.push("/swr/useRef")}>
        <RefreshCcwDotIcon />
      </Button>
    </div>
  );
};

export default useRefComponent;
