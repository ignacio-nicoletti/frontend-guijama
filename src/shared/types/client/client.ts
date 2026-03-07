// shared/types/client.ts

export type Address = {
  id: number;
  addressComplete?: string | null;
  postalCode?: string | null;
  province?: string | null;
  state?: string | null;
  streetOne?: string | null;
  streetTwo?: string | null;
  streetThree?: string | null;
  number?: string | null;
  floor?: string | null;
  city?: string | null;
  country?: string | null;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export type Client = {
  id: number;
  firstName: string;
  lastName: string;
  email: string | null;
  dni: string | null; // Cambiado a number porque en el backend es integer
  phone: string | null;
  state: boolean | null;
  addressId?: number | null;
  address?: Address | null;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export interface ClientResponse {
  data: {
    client: Client;
  };
  message: string;
}

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
  message: string;
}
