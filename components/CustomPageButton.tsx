import { useRouter } from 'next/router';
import React from 'react';

const CustomPageButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push({ pathname: '/products/[productID]', query: { productID: 1 } });
  };

  return <button onClick={handleClick}>CustomPageButton</button>;
};

export default CustomPageButton;
