"use client";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { Params } from "next/dist/server/request/params";
import { useParams, useRouter } from "next/navigation";
import useSWR, { preload } from "swr";

function page() {
  const params: Params = useParams();

const _fetcher = () =>
  axios
    .get(`https://fakestoreapi.com/products/${params?.slug}`)
    .then((res) => res.data);
   preload(`https://fakestoreapi.com/products/${params?.slug}`, _fetcher);

    const { data, isLoading } = useSWR(`https://fakestoreapi.com/products/${params?.slug}`, _fetcher, {
    suspense: true,
  });
  const router = useRouter();

  if (isLoading)
    return (
      <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
        <p>LOADING ... </p>
        <LoaderCircle className='size-12 animate-spin text-yellow-500' />
      </div>
    );

  return (
    <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center overflow-hidden'>
      {data.id}.{data.title}
      <button
        className='btn'
        onClick={() => router.back()}>
        BACK
      </button>
    </div>
  );
}

export default page;
