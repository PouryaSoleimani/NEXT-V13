"use client";
import toast from "react-hot-toast";
import {
  useNumbersFilterStore,
  useNumbersFilterStoreType,
} from "@/zustand/useNumberFiltersStore";

const ResultsWrapper = () => {
  const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  const numbers = store.numbers;
  console.info("numbers =>", numbers);
  return (
    <div
      dir='ltr'
      className='results col-span-5 grid grid-cols-4 place-content-stretch p-3 gap-3 text-center'>
      {numbers?.map((number, i) => (
        <button
          type='button'
          translate='no'
          onClick={() =>
            toast.success(Number(i + 1).toString(), {
              style: {
                backgroundColor: "black",
                border: "3px solid hotpink",
                color: "whitesmoke",
                width: "90px",
              },
            })
          }
          key={i}
          className='bg-stone-800 center rounded-lg border-b-2 border-b-transparent hover:border-b-pink-500 transition-all duration-300 cursor-pointer'>
          {number}
        </button>
      ))}
    </div>
  );
};

export default ResultsWrapper;

type FiltersType = {
  even?: boolean;
  odd?: boolean;
  three?: boolean;
  five?: boolean;
  seven?: boolean;
};

const changeFilter = <T extends keyof FiltersType>(key: T, value: FiltersType[T]) => {
  // setFilters((old) => ({ ...old, [key]: value }));
};
