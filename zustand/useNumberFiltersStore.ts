import { create } from "zustand";
import { items } from "@/app/css-training/data/items";
export type FilterType = "ODD" | "EVEN" | "ALL";
export type useNumbersFilterStoreType = {
  numbers: number[];
  filterType: FilterType
};

export const useNumbersFilterStore = create<useNumbersFilterStoreType>(() => ({
  numbers: items,
  filterType: "ALL",
}));
