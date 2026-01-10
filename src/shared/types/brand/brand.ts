export interface BrandResponse {
  data: {
    brands: Brand[];
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

export type Brand = {
  id: string;
  name: string;
};
