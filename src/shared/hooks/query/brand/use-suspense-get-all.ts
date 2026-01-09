import { Brand } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetAllBrands = () => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Brand[]>({
    resourceUrl: "brand",
    queryKey: ["brands"],
  });

  return { brands: entity, isLoading, error };
};
