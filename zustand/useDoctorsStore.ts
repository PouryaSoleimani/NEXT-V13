import { mockDoctors } from "@/mock/mockDoctors";
import { useDoctorsStoreType } from "@/types/types";
import { maxLength } from "zod";
import { create } from "zustand";

export const useDoctorsStore = create<useDoctorsStoreType>(() => ({
  doctors: mockDoctors || [],
  filterType: 'ALL',
  searchResult : []
})); 