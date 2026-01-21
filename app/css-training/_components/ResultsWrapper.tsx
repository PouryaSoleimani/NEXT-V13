"use client";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import SearchInputComponent from "./SearchInputComponent";
import { useDoctorsStore } from "@/zustand/useDoctorsStore";
import { PackageSearch, Users2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockDoctors } from "@/mock/mockDoctors";

type ParamsType = { params: { q: string } };


const ResultsWrapper = (params: ParamsType) => {
  // STORE ________________________________________________________________________________________________________________________
  // const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  // const numbers = store.numbers;
  const doctors = useDoctorsStore(s => s.doctors)
  const doctorsSetter = useDoctorsStore.setState
  const doctorsResults = useDoctorsStore(s => s.searchResult)
  const doctorsSearchedValue = useDoctorsStore(s => s.searchedValue)
  console.info("params Q =>", params.params.q);
  console.info("SEARCHED : ", doctorsSearchedValue)

  // RETURN ______________________________________________________________________________________________________________________
  return (
    <>
      <div
        dir='ltr'
        className={cn('results col-span-5 grid grid-cols-2 lg:grid-cols-4 place-content-stretch p-3 gap-3 text-center w-full')}>
        {!doctors.length && (
          <div className="flex flex-col min-w-full  items-center justify-center gap-5 col-span-4 font-vazir text-stone-500 center mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 bg-black p-5 rounded-lg border border-stone-600">
              <PackageSearch />
              <p className="mt-2">
                موردی یافت نشد
              </p>
              <p className="bg-stone-800 p-3 rounded-lg text-stone-300 mt-2">
                متن جستجو :
                <span> {doctorsSearchedValue?.toString()} </span>
              </p>
              <Button variant={'pink'} className="mt-2" onClick={() => doctorsSetter({ doctors: mockDoctors })}>
                نمایش همه پزشکان<Users2Icon />
              </Button>
            </div>
          </div>
        )}
        {doctors?.map((doctor) => (
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




