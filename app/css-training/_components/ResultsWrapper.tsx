"use client";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import SearchInputComponent from "./SearchInputComponent";
import { useDoctorsStore } from "@/zustand/useDoctorsStore";
import { PackageSearch } from "lucide-react";

type ParamsType = { params: { q: string } };


const ResultsWrapper = (params: ParamsType) => {
  // STORE ________________________________________________________________________________________________________________________
  // const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  // const numbers = store.numbers;
  const doctors = useDoctorsStore(s => s.doctors)
  const doctorsResults = useDoctorsStore(s => s.searchResult)
  console.info("params =>", params.params.q);

  // RETURN ______________________________________________________________________________________________________________________
  return (
    <>
      <div
        dir='ltr'
        className={cn('results col-span-5 grid grid-cols-4 place-content-stretch p-3 gap-3 text-center w-full')}>
        {!doctorsResults.length && (
          <div className="flex flex-col min-w-full gap-3 col-span-4 font-vazir text-stone-500 center mx-auto">
            <PackageSearch />
            موردی یافت نشد
          </div>
        )}
        {doctorsResults?.map((doctor) => (
          <button
            type='button'
            translate='no'
            onClick={() =>
              toast.success(`${doctor.genderFa} ${doctor.name}`, {
                style: {
                  fontFamily: "Vazir",
                  backgroundColor: `${doctor.gender === 'MALE' ? 'lightblue' : 'lightpurple'}`,
                  border: `3px solid ${doctor.gender === 'MALE' ? 'cornflowerblue' : 'hotpink'}`,
                  color: `${doctor.gender === 'MALE' ? 'darkblue' : 'indigo'}`,
                  width: "250px",
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




