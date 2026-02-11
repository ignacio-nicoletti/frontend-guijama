// frontend/src/hooks/use-products.ts
import { SellsResponse, Supplier } from "@/shared/types/sell/sell";
import { FilterSellSearch } from "@/shared/types/table/filter";
import { useQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../../lib";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseQueryFetch } from "../use-api-fetch";

// Versión REGULAR (sin suspense) - para componentes que no quieren suspense
export const useGetAllSells = () => {
  const query = useQuery({
    queryKey: ["sell"],
    queryFn: () => fetchEntities<SellsResponse>("sell"),
  });
  return {
    sells: query.data?.data.sells ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
// Versión SUSPENSE - para componentes que SÍ quieren usar suspense
export const useSuspenseGetAllSells = (filters: FilterSellSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `sell/?${queryString}` : "sell";

  const { data, isLoading, error, refetch } = useSuspenseQueryFetch<Supplier[]>(
    ["sell", queryString],
    resourceUrl,
    undefined,
    {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  );

  return {
    sells: data || [],
    isLoading,
    error,
    refetch,
  };
};
