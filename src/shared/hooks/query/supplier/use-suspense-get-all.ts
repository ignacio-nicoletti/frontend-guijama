// frontend/src/hooks/use-products.ts
import { Supplier, SupplierResponse } from "@/shared/types/sell/sell";
import { FilterSellSearch } from "@/shared/types/table/filter";
import { useQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../../lib";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseQueryFetch } from "../use-api-fetch";

// Versión REGULAR (sin suspense) - para componentes que no quieren suspense
export const useGetAllSuppliers = () => {
  const query = useQuery({
    queryKey: ["suppliers"],
    queryFn: () => fetchEntities<SupplierResponse>("supplier"),
  });
  return {
    suppliers: query.data?.data.suppliers ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
// Versión SUSPENSE - para componentes que SÍ quieren usar suspense
export const useSuspenseGetAllSuppliers = (filters: FilterSellSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `supplier/?${queryString}` : "supplier";

  const { data, isLoading, error, refetch } = useSuspenseQueryFetch<Supplier[]>(
    ["supplier", queryString],
    resourceUrl,
    undefined,
    {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  );

  return {
    suppliers: data || [],
    isLoading,
    error,
    refetch,
  };
};
