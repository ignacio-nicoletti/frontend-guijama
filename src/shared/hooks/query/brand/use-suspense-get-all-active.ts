import { Brand } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetAllActiveBrands = () => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Brand[]>({
    resourceUrl: "brand",
    queryKey: ["brands", "active"],
  });

  return { brands: entity, isLoading, error };
};
