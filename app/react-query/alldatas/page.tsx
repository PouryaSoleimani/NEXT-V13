"use client";
import React from "react";

import useData from "../_hooks/useData";

import { Card } from "@/components/ui/card";

function AllDatas() {
  const data = useData();
  const users = data.data[0] as Array<{ id: number; name: string; age: number }>;
  const products = data.data[1] as Array<{ id: number; name: string; price: number }>;

  console.info();
  return (
    <div className="w-screen h-screen flex flex-col gap-5 my-10">
      <h2 className="text-center text-3xl underline">USERS</h2>
      <div className="grid grid-cols-5 gap-3 border-b-2 pb-5 *:text-center *:w-44 place-content-center align-middle w-fit mx-auto">
        {users &&
          users?.map((item) => (
            <Card className="bg-black" key={item.id}>
              {item.name.toUpperCase()}
            </Card>
          ))}
      </div>
      <h2 className="text-center text-3xl underline">PRODUCTS</h2>
      <div className="grid grid-cols-5 gap-3 border-b-2 pb-5 *:text-center *:w-44 place-content-center align-middle w-fit mx-auto">
        {products &&
          products?.map((item) => (
            <Card className="bg-black" key={item.id}>
              {item.name.toUpperCase()}
            </Card>
          ))}
      </div>
    </div>
  );
}

export default AllDatas;
