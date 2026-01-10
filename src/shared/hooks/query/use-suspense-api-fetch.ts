import { fetchEntities } from "@/shared/lib";
import { useSuspenseQuery } from "@tanstack/react-query";

interface UseSuspenseApiFetchOptions<T, R> {
  resourceUrl: string;
  queryKey: readonly unknown[];
  queryParams?: Record<string, string | number | boolean>;
  select?: (data: T) => R;
}

export const useSuspenseApiFetch = <T, R = T>(options: UseSuspenseApiFetchOptions<T, R>) => {
  const { data } = useSuspenseQuery({
    queryKey: options.queryKey,
    queryFn: () => fetchEntities<T>(options.resourceUrl),
    select: options.select,
  });

  return {
    entity: data as R,
  };
};
