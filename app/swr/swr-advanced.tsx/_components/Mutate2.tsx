"use client";
import axios, { AxiosError } from "axios";
import { AlertTriangle, Loader, Loader2Icon, LoaderCircle, LoaderIcon, ShieldAlert } from "lucide-react";
import  { useState } from "react";
import toast from "react-hot-toast";
import { BiErrorCircle, BiSolidErrorCircle } from "react-icons/bi";
import useSWR, { mutate } from "swr";

const fetcher = () => axios.get("https://fakestoreapi.com/products").then((res) => res.data);

function Mutate2() {
  const [validated] = useState(true);

  const { data, isLoading, error } = useSWR(
    validated ? "https://fakestoreapi.com/products" : null,
    fetcher,
    {
      onLoadingSlow: () => {
        toast.loading("در حال بارگزاری | لطفا کمی صبر کنید", {
          position: "top-center",
          style: { borderBottom: "7px solid orange" },
          icon: <LoaderCircle className='animate-spin text-orange-500' />,
        });
      },
      onErrorRetry: () => {
        toast.loading("در حال بارگزاری - لطفا کمی صبر کنید", {
          position: "top-center",
        });
      },
      shouldRetryOnError: false,
      errorRetryCount: 2,
      loadingTimeout: 1000,
      onError: (error: Error) => {
        console.info("%c SWR ERROR ===>", "color:pink", error.message);
        toast.dismissAll();
        toast.error(error.message, {
          icon: <BiSolidErrorCircle className='size-6 text-red-600' />,
          style: {
            border: "2px solid red",
            backgroundColor: "black",
            color: "whitesmoke",
            fontFamily: "monospace",
          },
        });
      },
    }
  );

  function addSingleProduct() {
    const fakeProduct = {
      id: Date.now(),
      title: "FAKE PRODUCT",
      description: "DESCRIPTION",
    };
    axios
      .post("https://fakestoreapi.com/products", fakeProduct)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        console.info("%c AXIOS ERROR ==>", "color:red", error.message);
        toast.error(error.message);
      });
    mutate("https://fakestoreapi.com/products", [...data, fakeProduct], false);
  }

  if (!data) {
    return (
      <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
        <div className='bg-black p-8 rounded-xl flex flex-col gap-4 border-4 border-orange-500'>
          <span className='text-3xl'>NO DATA</span>
          <AlertTriangle className='size-10 text-orange-500 mx-auto  animate-bounce' />
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
        Loading ...
        <LoaderIcon className='size-12 text-rose-700 animate-spin' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
        <div className='bg-black p-10 rounded-xl flex flex-col gap-10'>
          <span className='text-3xl'> Error !</span>
          <BiErrorCircle className='size-32 text-rose-700 animate-bounce' />
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center'>
      <button
        onClick={addSingleProduct}
        className='bg-emerald-900 mx-24 mt-4 h-16 w-44 rounded-xl border-4 border-white'>
        ADD
      </button>
      <div className='w-[90%] mx-auto my-4 gap-3 grid grid-cols-6 '>
        {data?.map((product: any) => (
          <div
            key={product.id}
            className='bg-black h-44 overflow-hidden p-3 border-4 rounded-xl border-rose-700/50'>
            <h1 className='text-justify text-rose-600'>
              {product.title.slice(0, 25)}
            </h1>
            <p className='mt-2 text-justify font-stretch-90%'>
              {product.description.slice(0, 30)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mutate2;
