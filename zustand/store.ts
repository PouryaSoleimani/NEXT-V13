import { create } from 'zustand';
type CounterStoreType = { count: number };

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state: CounterStoreType) => ({ count: state?.count + 1 })),
  decrease: () => set((state: CounterStoreType) => ({ count: state?.count - 1 })),
  changeTo100: () => set({ count: 100 }),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
