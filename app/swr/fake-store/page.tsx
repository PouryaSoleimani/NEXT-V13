"use client";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import useSWR, { preload } from "swr";

const _productsFetcher = () => axios.get("https://fakestoreapi.com/products").then((res) => res.data);
const _singleFetcher = (id: number | string) => axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data);

function page() {
  const { data, isLoading } = useSWR("https://fakestoreapi.com/products", _productsFetcher);

  if (isLoading)
    return (
      <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
        <p>LOADING ... </p>
        <LoaderCircle className='size-12 animate-spin text-yellow-500' />
      </div>
    );

  return (
    <div className='section'>
      <div>
        {data?.map((item: any) => (
          <Link
            href={`/swr/fake-store/${item.id}`}
            onMouseEnter={() => {
              preload(`https://fakestoreapi.com/products/${item.id}`, () =>
                _singleFetcher(item.id)
              );
              console.info("HOVERED");
            }}
            className='my-2 block bg-black p-3 rounded-xl hover:border-b-4 border-b-yellow-500'
            key={item.id}>
            {item.id}.{item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
