'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const CustomPageButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    router.push('/', { scroll: true });
  };
  console.info(pathName, searchParams);
  return (
    <button onClick={handleClick} className="bg-orange-500 px-6 py-2 rounded-lg text-black font-bold">
      CustomPageButton
    </button>
  );
};

export default CustomPageButton;
