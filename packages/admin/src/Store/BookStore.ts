// stores/counterStore.ts
import { StateCreator } from 'zustand';

export type CounterSlice = {
  count: number;
  increase: () => void;
};

export const createCounterSlice: StateCreator<
  CounterSlice,
  [],
  [],
  CounterSlice
> = (set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
});
