import type { Brand } from "../brand/brand";
import type { Category } from "../category/category";

export type Product = {
  id: string;
  code: string;
  fullCode: string;
  description: string;
  brand: Brand;
  category: Category;
  cost: number;
  profit: number;
  iva: number;
  calculatedCost: number;
  finalPrice: number;
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
