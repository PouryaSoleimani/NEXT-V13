"use client";
import axios from "axios";
import {
  DessertIcon,
  DollarSign,
  LoaderCircle,
  Lock,
  Mail,
  Notebook,
  Phone,
  ShoppingBag,
} from "lucide-react";
import React from "react";
import useSWR, { mutate } from "swr";
import { BiBasket, BiCategory } from "react-icons/bi";

import useProductsFetch, { SingleProductType } from "../_hooks/useProductsFetch";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function ProductsPage() {
  const { data: products, error, isLoading } = useProductsFetch();

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoaderCircle className="size-12 animate-spin" />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className='bg-black p-4 rounded-md my-6 w-[90%] mx-auto shadow'>
      <h1 className='w-full px-4 text-start bg-orange-600/50 text-2xl font-bold border-b-4 border-white  py-4 rounded-md'>
        Posts
      </h1>
      <div className='grid grid-cols-4 p-3'>
        {products?.slice(0, 10)?.map((product: SingleProductType) => (
          <div
            key={product.id}
            className='p-2 font-mono font-semibold text-lg border-b-4 border-r-4 border-t-4 border-zinc-600 first:border-l-4  last:border-t-0 last:border-l-0 nth-[5]:border-l-4 nth-[9]:border-l-4'>
            <h3 className='flex items-center gap-3 uppercase'>
              <ShoppingBag className='size-5' />
              {product.title.slice(0, 20)} ...
            </h3>
            <p className='text-blue-700 flex items-center gap-3'>
              <Notebook className='size-5' />
              {product.description.slice(0, 25)} ...
            </p>
            <p className='bg-green-800 my-1 rounded flex items-center gap-3'>
              <DollarSign className='size-5' />
              {product.price}
            </p>
            <p className='text-fuchsia-700/50 hover:text-fuchsia-700 flex items-center gap-3'>
              <BiCategory className='size-6' />
              {product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
