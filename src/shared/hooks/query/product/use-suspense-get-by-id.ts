import { Product } from "@/shared/types";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetProductById = (id: string) => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Product>({
    resourceUrl: `product/${id}`,
    queryKey: ["product", id],
  });

  return { product: entity, isLoading, error };
};
