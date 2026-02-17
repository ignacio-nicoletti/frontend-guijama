// shared/types/product.ts

export type Client = {
  id: number;
  firstName: String;
  lastName: String;
  DNI: string;
  phone: string;
  email: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export interface ClientsResponse {
  data: {
    clients: Client[];
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
