import { Category } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetCategoryById = (id: string) => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Category>({
    resourceUrl: `category/${id}`,
    queryKey: ["category", id],
  });

  return { category: entity, isLoading, error };
};
