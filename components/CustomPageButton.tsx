'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const fetchData = async () => {
  const request = await fetch('https://fakestoreapi.com/productss', { cache: 'force-cache' });
  const response = await request.json();
  return response;
};
const myPromise = fetchData();

const CustomPageButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const redirectHandler = () => {
    toast.promise(
      myPromise,
      {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
      },
      {
        success: {
          duration: 3000,
          icon: '👏',
        },
      },
    );
    setTimeout(() => {
      router.push('/', { scroll: true });
    }, 1000);
  };
  const handleClick = () => {
    router.push('/', { scroll: true });
  };
  console.info(pathName, searchParams);
  return (
    <>
      <button onClick={handleClick} className="bg-orange-500 px-6 py-2 rounded-lg text-black font-bold">
        CustomPageButton
      </button>
      <button onClick={redirectHandler} className="bg-red-500 my-2 px-14 py-2 rounded-lg text-black font-bold">
        REDIRECT
      </button>
    </>
  );
};

export default CustomPageButton;
