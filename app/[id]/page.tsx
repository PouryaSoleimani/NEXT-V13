import React from 'react';
import { redirect } from 'next/navigation';

type dynamicProductPageParams = { params: { id: string } };
type productType = { id: number; title: string; price: string };

// COMPONENT
const DynamicProductPage = async (params: dynamicProductPageParams) => {
  const pageParams = params.params.id;

  const request = await fetch(`https://fakestoreapi.com/products/${pageParams}`);

  if (Number(pageParams) > 20 || typeof pageParams === 'string') {
    redirect('/product-not-found');
  }

  const response = await request?.json();

  //Return
  return (
    <>
      <div className="p-6 text-3xl font-bold text-center border-b-8 border-white">
        <h1>DYNAMIC PRODUCT PAGE</h1>
      </div>

      <div className="p-6 text-3xl font-bold text-center border-b-8 border-red-800">
        <h1>Page Params : {pageParams}</h1>
      </div>

      {response && (
        <div className="p-6 text-3xl font-bold text-center border-b-8 border-blue-800">
          <h1>
            {response.id} -- {response.title} -- {response.price}
          </h1>
        </div>
      )}
    </>
  );
};

export default DynamicProductPage;
