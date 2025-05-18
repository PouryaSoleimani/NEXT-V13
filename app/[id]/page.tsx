import React from 'react';
import { redirect } from 'next/navigation';

type dynamicProductPageParams = { params: { id: string } };

// COMPONENT
const DynamicProductPage = async (params: dynamicProductPageParams) => {
  const pageParams = params.params.id;

  const request = await fetch(`https://fakestoreapi.com/products/${pageParams}`);

  if (Number(pageParams) > 20) {
    redirect('/product-not-found');
  }

  const response = await request?.json();

  //Return
  return (
    <section className="w-1/2 mx-auto mt-32 rounded-3xl p-8 bg-zinc-900 shadow-2xl">
      <div className="p-6 text-3xl text-center border-b-8 rounded-t-xl border-white bg-white text-black font-black">
        <h1>DYNAMIC PRODUCT PAGE</h1>
      </div>

      <div className="p-6 text-3xl font-black text-center border-b-8 border-red-800 bg-red-800 text-white">
        <h1>Page Params : {pageParams}</h1>
      </div>

      {response && (
        <div className="p-6 text-3xl font-black text-center border-b-8 border-blue-800 bg-blue-800 text-white rounded-b-xl">
          <h1>
            {response.id} - {response.title.slice(0, 30)} : ${response.price}
          </h1>
        </div>
      )}
    </section>
  );
};

export default DynamicProductPage;
