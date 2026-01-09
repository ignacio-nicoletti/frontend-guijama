import { Category } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetAllCategory = () => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Category[]>({
    resourceUrl: "category",
    queryKey: ["categories"],
  });

  return { categories: entity, isLoading, error };
};
