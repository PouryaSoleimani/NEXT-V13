import { create } from "zustand";
import { items } from "@/app/css-training/data/items";
import { useNumbersFilterStoreType } from "@/types/types";


export const useNumbersFilterStore = create<useNumbersFilterStoreType>(() => ({
  numbers: items,
  filterType: "ALL",
}));
