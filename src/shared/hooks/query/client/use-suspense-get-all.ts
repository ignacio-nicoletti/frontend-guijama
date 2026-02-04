// frontend/src/hooks/use-products.ts
import { Client, ClientsResponse } from "@/shared/types/client/client";
import { FilterClientSearch } from "@/shared/types/table/filter";
import { useQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../../lib";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseQueryFetch } from "../use-api-fetch";

// Versión REGULAR (sin suspense) - para componentes que no quieren suspense
export const useGetAllClients = () => {
  const query = useQuery({
    queryKey: ["client"],
    queryFn: () => fetchEntities<ClientsResponse>("client"),
  });
  return {
    clients: query.data?.data.clients ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
// Versión SUSPENSE - para componentes que SÍ quieren usar suspense
export const useSuspenseGetAllClients = (filters: FilterClientSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `client/?${queryString}` : "client";

  const { data, isLoading, error, refetch } = useSuspenseQueryFetch<Client[]>(
    ["client", queryString],
    resourceUrl,
    undefined,
    {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  );

  return {
    clients: data || [],
    isLoading,
    error,
    refetch,
  };
};
