import { Client } from "@/shared/types/client/client";
import { useSuspenseApiFetch } from "../use-suspense-api-fetch";

export const useSuspenseGetClientById = (id: string) => {
  const { entity, isLoading, error } = useSuspenseApiFetch<Client>({
    resourceUrl: `client/${id}`,
    queryKey: ["client", id],
  });

  return { client: entity, isLoading, error };
};
