'use client';
import React from 'react';
interface Props {
  data: { id: number; title: string }[];
}
const AxiosProducts = (data: Props) => {
  const allProducts = data.data;
  console.info("CLIENT");
  return (
    <div>
      AxiosProducts
      {allProducts.length > 0 &&
        allProducts?.map((item) => (
          <div key={item.id}>
            <h1 className="my-3 bg-orange-500/30 text-white font-black text-xl p-3 rounded mx-4">{item.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default AxiosProducts;
