'use client';
import React from 'react';
interface Props {
  data: { id: number; title: string }[];
}

const AxiosProducts = (data: Props) => {
  // console.info('CLIENT', data.data);

  return (
    <div>
      <h2 className="text-center text-3xl font-black w-fit mx-auto px-8 py-4 rounded-xl bg-purple-700">AxiosProducts</h2>
      {data.data.length > 0 ? (
        data.data.map((item) => (
          <h2 key={item.id} className="bg-gray-800 text-white py-4 my-4 px-4 rounded w-fit font-black text-2xl ">
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
