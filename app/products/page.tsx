import Link from "next/link";
import React from "react";

const AllProductsPage = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-4">
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/1"
        >
          1
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/2"
        >
          2
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/3"
        >
          3
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/4"
        >
          4
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/5"
        >
          5
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/6"
        >
          6
        </Link>
        <Link
          className="text-2xl font-bold bg-red-800 rounded-full my-3 size-12 hover:bg-zinc-800 duration-200 flex items-center justify-center "
          href="/products/7"
        >
          7
        </Link>
      </ul>
    </div>
  );
};

export default AllProductsPage;
