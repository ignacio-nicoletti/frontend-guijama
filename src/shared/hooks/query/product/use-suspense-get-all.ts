// frontend/src/hooks/use-products.ts
import { useQuery } from "@tanstack/react-query";
import { fetchEntities } from "../../../lib";
import type { FilterProductSearch, Product } from "../../../types";
import { buildQueryString } from "../../../utils/query-params";
import { useSuspenseQueryFetch } from "../use-api-fetch";

// Versión REGULAR (sin suspense) - para componentes que no quieren suspense
export const useGetAllProducts = (filters: FilterProductSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `product/?${queryString}` : "product";

  const { data, isLoading, isError, error, refetch } = useQuery<Product[], Error>({
    queryKey: ["products", queryString],
    queryFn: async () => {
      console.log("🔍 Buscando productos en:", resourceUrl);
      try {
        const result = await fetchEntities<Product[]>(resourceUrl, undefined);
        console.log("✅ Productos encontrados:", result?.length || 0);
        return result;
      } catch (err) {
        console.error("❌ Error buscando productos:", err);
        throw err;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });

  return {
    products: data || [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

// Versión SUSPENSE - para componentes que SÍ quieren usar suspense
export const useSuspenseGetAllProducts = (filters: FilterProductSearch) => {
  const queryString = buildQueryString(filters);
  const resourceUrl = queryString ? `product/?${queryString}` : "product";

  const { data, isLoading, error, refetch } = useSuspenseQueryFetch<Product[]>(
    ["products", queryString],
    resourceUrl,
    undefined,
    {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    }
  );

  return {
    products: data || [],
    isLoading,
    error,
    refetch,
  };
};

// Hook para mutaciones
export const useProductMutations = () => {
  const createProduct = async (productData: Omit<Product, "id">) => {
    return fetch(`http://localhost:3000/api/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(productData),
    }).then((res) => res.json());
  };

  const updateProduct = async (id: string, productData: Partial<Product>) => {
    return fetch(`http://localhost:3000/api/product/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(productData),
    }).then((res) => res.json());
  };

  const deleteProduct = async (id: string) => {
    return fetch(`http://localhost:3000/api/product/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => res.json());
  };

  return {
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
