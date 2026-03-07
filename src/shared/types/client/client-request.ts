export type ClientUpsertRequest = {
  firstName: string;
  lastName: string;
  dni: string | null;
  phone: string | null;
  email?: string;
};
