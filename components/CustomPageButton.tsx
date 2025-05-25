'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const CustomPageButton = () => {
  const router = useRouter();

  const handleClick = () => {};

  return <button onClick={handleClick}>CustomPageButton</button>;
};

export default CustomPageButton;
