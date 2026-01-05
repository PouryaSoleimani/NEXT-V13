"use client";
import { AlertTriangle } from "lucide-react";
import React from "react";

const ListWrapper = ({ list }: { list: any[] }) => {
  if(!list){
    return (
      <div>
        <AlertTriangle />
        No Items to Show
      </div>
    );
  }
  return (
    <div className='border bg-black mx-auto my-32 rounded-xl border-stone-700 p-5 w-fit'>
      {list?.map((item, index) => (
        <p
          key={item.id}
          className='border-b border-stone-800 py-1'>
          {index + 1} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default ListWrapper;
