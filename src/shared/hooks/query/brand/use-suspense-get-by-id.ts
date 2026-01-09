import { Brand } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetBrandById = (id: string) => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Brand>({
    resourceUrl: `brand/${id}`,
    queryKey: ["brand", id],
  });

  return { brand: entity, isLoading, error };
};
