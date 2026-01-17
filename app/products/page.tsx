"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
type SingleProductType = {
  id: number;
  title: string;
  price: number;
  isAvailable: boolean;
};

const AllProductsPage = () => {
  const [AllProducts, setAllProducts] = useState<SingleProductType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setAllProducts(res.data.allProducts))
      .catch((err) => toast.error(err.message));
    return;
  }, []);

  return (
    <div className='grid grid-cols-6 gap-5 py-32 px-10'>
      {AllProducts.length &&
        AllProducts.map((item: SingleProductType) => (
          <div
            key={item.id}
            className='bg-zinc-900 p-5 rounded flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-medium'>
              {item.title} : $ {item.price}
            </h2>
            <span>
              {item.isAvailable ? (
                <span className='text-emerald-600'>AVAILABLE</span>
              ) : (
                <span className='text-rose-600'>UNAVAILABLE</span>
              )}
            </span>
          </div>
        ))}
    </div>
  );
};

export default AllProductsPage;
