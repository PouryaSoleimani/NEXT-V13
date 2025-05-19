import React from 'react';

interface AxiosProductsProps {
  title: string;
}
const AxiosProducts = (data: AxiosProductsProps) => {
  return (
    <div>
      <h1 className="bg-orange-600 w-fit p-4 rounded text-black font-black my-5">{data.title}</h1>
    </div>
  );
};

export default AxiosProducts;
