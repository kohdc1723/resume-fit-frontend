import { create } from "zustand";

interface SideBarStore {
  isExpanded: boolean;
  toggleSideBar: () => void;
  setSideBar: (value: boolean) => void;
}

export const useSideBarStore = create<SideBarStore>(set => ({
  isExpanded: true,
  toggleSideBar: () => set(state => ({ isExpanded: !state.isExpanded })),
  setSideBar: (value: boolean) => set({ isExpanded: value }),
}));
