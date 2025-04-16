// store/index.ts
import { createStore } from 'zustand/vanilla';
import { createContext } from 'zustand/context';

import { createCounterSlice, CounterSlice } from './BookStore';
import { createUserSlice, UserSlice } from './DetailType';

export type AppState = CounterSlice & UserSlice;

export const createAppStore = () =>
  createStore<AppState>()((...a) => ({
    ...createCounterSlice(...a),
    ...createUserSlice(...a),
  }));

export const { Provider, useStore } = createContext<AppState>();
