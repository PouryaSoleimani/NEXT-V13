"use client";
import toast from "react-hot-toast";
import {
  useNumbersFilterStore,
} from "@/zustand/useNumberFiltersStore";
import { cn } from "@/lib/utils";
import SearchInputComponent from "./SearchInputComponent";
import { useDoctorsStore } from "@/zustand/useDoctorsStore";
import { useNumbersFilterStoreType } from "@/types/types";

type ParamsType = { params: { q: string } };


const ResultsWrapper = (params: ParamsType) => {
  const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  const numbers = store.numbers;
  const doctors = useDoctorsStore(s => s.doctors)
  console.info("params =>", params.params.q);

  // RETURN ______________________________________________________________________________________________________________________
  return (
    <>
      <div
        dir='ltr'
        className={cn('results col-span-5 grid grid-cols-4 place-content-stretch p-3 gap-3 text-center w-full')}>
        {doctors?.map((doctor, i) => (
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
            key={doctor.id}
            className={cn(
              "bg-stone-800 font-vazir center rounded-lg border-b-4 border-b-transparent transition-all duration-300 cursor-pointer",
              doctor.gender === 'FEMALE' ? 'hover:border-b-pink-500' : 'hover:border-b-blue-500',
              doctor.name.toString() === params.params.q && "border-pink-500 border-4"
            )}>
            {doctor.name}
            <span> | </span>
            {doctor.gender === 'MALE' ? <p className="bg-blue-800 px-2 rounded-md py-0.5">آقای </p> : <p className="bg-pink-800 px-2 rounded-md py-0.5">خانم</p>}
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



