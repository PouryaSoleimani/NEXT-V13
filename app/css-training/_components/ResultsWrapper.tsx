"use client";
import toast from "react-hot-toast";
import {
  useNumbersFilterStore,
  useNumbersFilterStoreType,
} from "@/zustand/useNumberFiltersStore";
import { cn } from "@/lib/utils";
import SearchInputComponent from "./SearchInputComponent";

type ParamsType = { params: { q: string } };
const ResultsWrapper = (params: ParamsType) => {
  const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  const numbers = store.numbers;
  console.info("params =>", params.params.q);

  // RETURN ______________________________________________________________________________________________________________________
  return (
    <>
    <div
      dir='ltr'
      className='results col-span-5 grid grid-cols-4 place-content-stretch p-3 gap-3 text-center w-full'>
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
          className={cn(
            "bg-stone-800 center rounded-lg border-b-2 border-b-transparent hover:border-b-pink-500 transition-all duration-300 cursor-pointer",
            number.toString() === params.params.q && "border-pink-500 border-4"
          )}>
          {number}
        </button>
      ))}
      <SearchInputComponent />
    </div>
  </>
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
