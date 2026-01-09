import { Category } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetAllActiveCategory = () => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Category[]>({
    resourceUrl: "category",
    queryKey: ["categories", "active"],
  });

  return { categories: entity, isLoading, error };
};
