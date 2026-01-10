import { fetchEntities } from "@/shared/lib";
import { CategoryResponse } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useGetAllCategory() {
  const query = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchEntities<CategoryResponse>("category"),
  });

  return {
    categories: query.data?.data.categories ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
}
