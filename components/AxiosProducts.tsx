'use client';
import React from 'react';
interface Props {
  data: { id: number; title: string }[];
}

const AxiosProducts = (data: Props) => {
  console.info('CLIENT', data.data);

  return (
    <div>
      AxiosProducts
      {data.data.length > 0 ? (
        data.data.map((item) => (
          <h2 key={item.id} className="bg-pink-500 py-4 my-4 px-4 rounded w-fit text-black font-black text-2xl ">
            {item.title}
          </h2>
        ))
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default AxiosProducts;
