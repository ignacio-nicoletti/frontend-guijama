import { FilterClientSearch } from "@/shared/types/table/filter";
import { create } from "zustand";

type ClientFiltersState = {
  filters: FilterClientSearch | undefined;
  setFilters: (filters: FilterClientSearch) => void;
  clearFilters: () => void;
  updateFilters: (partialFilters: Partial<FilterClientSearch>) => void;
};

export const useClientFilters = create<ClientFiltersState>((set) => ({
  filters: undefined,
  setFilters: (filters: FilterClientSearch) => set({ filters }),
  clearFilters: () => set({ filters: undefined }),
  updateFilters: (partialFilters: Partial<FilterClientSearch>) =>
    set((state) => ({
      filters: state.filters
        ? { ...state.filters, ...partialFilters }
        : (partialFilters as FilterClientSearch),
    })),
}));
