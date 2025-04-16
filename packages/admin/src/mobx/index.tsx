import { createContext, useContext } from 'react';
import { RootStore } from './rootStore';

export const rooStoreContext = createContext({
  rootStore: new RootStore(),
});
