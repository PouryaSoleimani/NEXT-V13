import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
type useFormStoreType = {
  datas: [];
  addDatas: (state: [], datas: {} | []) => void;
};

export const useFormStore = create()(
  persist(
    (_set) => ({
      datas: [],
      addDatas: (state: any, datas: any) => {
        datas: [...state.datas, datas];
      },
    }),
    {
      name: "___FORM_STORE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
