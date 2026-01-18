"use client";
import toast from "react-hot-toast";
import { items } from "./../data/items";
const ResultsWrapper = () => {
  return (
    <div className='results col-span-5 grid grid-cols-4 place-content-stretch p-3 gap-3 text-center'>
      {items.map((_, i) => (
        <button
          type='button'
          translate='no'
          onClick={() =>
            toast.success(i.toString(), {
              style: { backgroundColor: "black", border: "3px solid hotpink", color: "whitesmoke", width: "90px" },
            })
          }
          key={i}
          className='bg-stone-800 center rounded-lg border-b-2 border-b-transparent hover:border-b-pink-500 transition-all duration-300 cursor-pointer'>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ResultsWrapper;
