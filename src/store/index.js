import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useStore = create(
  persist(devtools(immer((set) => ({
    activePage: 'welcome',
    setActivePage: (page) => set((draftState) => { draftState.activePage = page; }, false, 'activePage/setActivePage'),
  }))), {
    name: 'counter-storage',
  }),
);

export default useStore;
