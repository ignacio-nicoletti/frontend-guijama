// frontend/src/hooks/use-products.ts
import { useQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../../lib";
import type { FilterProductSearch, Product, ProductResponse } from "../../../types";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseQueryFetch } from "../use-api-fetch";

// Versión REGULAR (sin suspense) - para componentes que no quieren suspense
export const useGetAllProducts = () => {
  const query = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchEntities<ProductResponse>("product"),
  });
  return {
    products: query.data?.data.products ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
// Versión SUSPENSE - para componentes que SÍ quieren usar suspense
export const useSuspenseGetAllProducts = (filters: FilterProductSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `product/?${queryString}` : "product";

  const { data, isLoading, error, refetch } = useSuspenseQueryFetch<Product[]>(
    ["products", queryString],
    resourceUrl,
    undefined,
    {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    }
  );

  return {
    products: data || [],
    isLoading,
    error,
    refetch,
  };
};
