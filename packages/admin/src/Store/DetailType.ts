// stores/userStore.ts
import { StateCreator } from 'zustand';

export type UserSlice = {
  name: string;
  setName: (name: string) => void;
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  name: '',
  setName: (name) => set({ name }),
});
