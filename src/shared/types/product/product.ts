// shared/types/product.ts

import { Brand } from "../brand/brand";

export type Product = {
  id: number; // Cambiado de string a number (serial es número)
  title: string; // Añadido
  code: string;
  priceList: number | null;
  priceCost: number | null;
  priceX10: number | null;
  priceX100: number | null;
  brand: Brand | null; // Puede ser null si usa leftJoin
  brandId?: number | null; // Opcional para referencia
  // Si tienes categoría, añade:
  // category: Category | null;
  // categoryId?: number | null;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export interface ProductResponse {
  data: {
    products: Product[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}
