import { fetchEntities } from "@/shared/lib";
import { BrandResponse } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

export function useGetAllBrands() {
  const query = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchEntities<BrandResponse>("brand"),
  });

  return {
    brands: query.data?.data.brands ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
}
