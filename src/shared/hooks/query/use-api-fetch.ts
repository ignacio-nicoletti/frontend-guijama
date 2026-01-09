import { fetchEntities } from "@/shared/lib";

import { useQuery } from "@tanstack/react-query";

type UseApiFetchOptions<T> = {
  resourceUrl: string;
  queryKey: string[];
  queryParams?: Record<string, string>;
  select?: (data: T[]) => T[];
  enabled?: boolean;
  body?: unknown;
};

type UseApiFetchReturn<T> = {
  entities: T[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<unknown>;
};

export const useApiFetch = <T>(options: UseApiFetchOptions<T>): UseApiFetchReturn<T> => {
  //   const { getToken } = useAuth();

  const { data, isLoading, error, refetch } = useQuery<T[]>({
    queryKey: options.queryKey,
    queryFn: async (): Promise<T[]> => fetchEntities<T[]>(options.resourceUrl, options.queryParams),
    enabled: options.enabled ?? true,
    select: options.select,
  });

  return {
    entities: data ?? [],
    isLoading: isLoading,
    error: error,
    refetch: refetch,
  };
};
