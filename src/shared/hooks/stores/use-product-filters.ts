import { create } from "zustand";
import type { FilterProductSearch } from "../../types";

type ProductFiltersState = {
  filters: FilterProductSearch | undefined;
  setFilters: (filters: FilterProductSearch) => void;
  clearFilters: () => void;
  updateFilters: (partialFilters: Partial<FilterProductSearch>) => void;
};

export const useProductFilters = create<ProductFiltersState>((set) => ({
  filters: undefined,
  setFilters: (filters: FilterProductSearch) => set({ filters }),
  clearFilters: () => set({ filters: undefined }),
  updateFilters: (partialFilters: Partial<FilterProductSearch>) =>
    set((state) => ({
      filters: state.filters
        ? { ...state.filters, ...partialFilters }
        : (partialFilters as FilterProductSearch),
    })),
}));
