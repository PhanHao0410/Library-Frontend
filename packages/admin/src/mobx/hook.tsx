import { useContext } from 'react';
import { rooStoreContext } from '.';

export const useStoreMobx = () => useContext(rooStoreContext);
