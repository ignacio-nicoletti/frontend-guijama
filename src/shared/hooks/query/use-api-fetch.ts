// frontend/src/hooks/use-suspense-query.ts
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../lib";

export const useSuspenseQueryFetch = <T>(
  queryKey: string[],
  resourceUrl: string,
  queryParams?: Record<string, string>,
  options?: {
    staleTime?: number;
    gcTime?: number;
  }
) => {
  return useSuspenseQuery({
    queryKey,
    queryFn: () => fetchEntities<T>(resourceUrl),
    staleTime: options?.staleTime ?? 5 * 60 * 1000, // 5 minutos por defecto
    gcTime: options?.gcTime ?? 10 * 60 * 1000, // 10 minutos por defecto
  });
};
