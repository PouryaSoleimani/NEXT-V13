import { create } from "zustand";
import { items } from "@/app/css-training/data/items";

export type useNumbersFilterStoreType = { numbers: number[] };

export const useNumbersFilterStore = create(() => ({ numbers: items }));
