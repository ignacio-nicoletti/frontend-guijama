// shared/types/product.ts

export type Client = {
  id: number; // Cambiado de string a number (serial es número)
  firstName: String;
  lastName: String;
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
