// hooks/use-products.ts
import { mutateEntity } from "../../../lib/api-utils/fetch-entities";
import type { FilterProductSearch, Product } from "../../../types";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetAllProducts = (filters: FilterProductSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `product/?${queryString}` : "product";

  const { entity, isLoading, error, refetch } = useSuspenseApiFetch<Product[]>({
    resourceUrl,
    queryKey: ["products", queryString],
  });

  return {
    products: entity,
    isLoading,
    error,
    refetch,
  };
};

export const useSuspenseGetProductById = (id: string) => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Product>({
    resourceUrl: `product/${id}`,
    queryKey: ["product", id],
  });

  return {
    product: entity,
    isLoading,
    error,
  };
};

// Hook para mutaciones (sin suspense)
export const useProductMutations = () => {
  const createProduct = async (productData: Omit<Product, "id">) => {
    return mutateEntity<Product>("product", "POST", productData);
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    return mutateEntity<Product>(`product/${id}`, "PUT", productData);
  };

  const deleteProduct = async (id: string) => {
    return mutateEntity<void>(`product/${id}`, "DELETE");
  };

  return {
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
