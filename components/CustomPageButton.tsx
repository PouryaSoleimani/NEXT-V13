"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const fetchData = async () => {
  const request = await fetch("https://fakestoreapi.com/products", { cache: "force-cache" });
  const response = await request.json();
  return response;
};

const CustomPageButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.info(pathName, searchParams);

  // REDIRECT
  const redirectHandler = () => {
    toast.promise(
      fetchData()
        .then(() => {
          toast.success("SUCCESS");
          setTimeout(() => {
            router.push("/products");
          }, 1000);
        })
        .catch((err) => {
          toast.error("ERROR");
          return;
        }),
      { loading: "Loading ..." },
      { success: { duration: 3000, icon: "👏" } }
    );
  };

  const handleClick = () => {
    router.push("/", { scroll: true });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-orange-500 px-6 py-2 rounded-lg text-black font-bold"
      >
        CustomPageButton
      </button>
      <button
        onClick={redirectHandler}
        className="bg-red-500 my-2 px-14 py-2 rounded-lg text-black font-bold"
      >
        REDIRECT
      </button>
    </>
  );
};

export default CustomPageButton;
