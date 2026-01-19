"use client";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useNumbersFilterStore } from "@/zustand/useNumberFiltersStore";
import { useDoctorsStore } from "@/zustand/useDoctorsStore";

type Props = PropsWithChildren & { handler: () => void; type?: "ODD" | "EVEN" | "ALL", typeGender?: "ALL" | 'MALE' | "FEMALE", isDoctor?: boolean };

const CardComponent = ({ children, handler, type, typeGender, isDoctor }: Props) => {
  const _type = useNumbersFilterStore((s) => s.filterType);
  const _genderType = useDoctorsStore(s => s.filterType)
  return (
    <button
      onClick={handler}
      className={cn(
        "bg-stone-900 border-r-2 border-r-transparent hover:border-r-pink-500 cursor-pointer rounded-lg px-3 py-2 w-32 text-xs font-thin text-center font-vazir center hover:bg-stone-800 transition-all duration-300",
        type === _type && "bg-pink-500 hover:bg-pink-600 border-none",
        isDoctor && _genderType == typeGender && "bg-pink-500 hover:bg-pink-600 border-none",
      )}>
      {children}
    </button>
  );
};

export default CardComponent;
