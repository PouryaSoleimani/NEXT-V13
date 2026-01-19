import { SingleDoctorType, useDoctorsStoreType } from "@/types/types";
import { create } from "zustand";



export const mockDoctors: SingleDoctorType[] = [
  { id: 1, name: 'دکتر رضایی', gender: 'MALE' },
  { id: 2, name: 'دکتر محمدی', gender: 'FEMALE' },
  { id: 3, name: 'دکتر محسنی', gender: 'MALE' },
  { id: 4, name: 'دکتر علیپور', gender: 'FEMALE' },
  { id: 5, name: 'دکتر صبوری', gender: 'MALE' },
  { id: 6, name: 'دکتر خوش نیت', gender: 'FEMALE' },
  { id: 7, name: 'دکتر مجیدی', gender: 'MALE' },
  { id: 8, name: 'دکتر جعفری', gender: 'FEMALE' },
  { id: 9, name: 'دکتر مجیدی', gender: 'MALE' },
  { id: 10, name: 'دکتر قنبری', gender: 'FEMALE' },
  { id: 11, name: 'دکتر موسی زاده', gender: 'MALE' },
  { id: 12, name: 'دکتر موسوی', gender: 'FEMALE' },

]

export const useDoctorsStore = create<useDoctorsStoreType>(() => ({
  doctors: mockDoctors || [],
  filterType: 'ALL'
}));