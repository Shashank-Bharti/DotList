import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filterMode: "all",
  setFilterMode: (newFilterMode) => set({ filterMode: newFilterMode }),
  toggleFilterMode: () =>
    set((state) => ({
      filterMode: state.filterMode === "all" ? "remaining" : "all",
    })),
}));
