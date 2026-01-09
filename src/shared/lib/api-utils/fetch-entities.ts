// fetch-entities.ts (modificado)
import { fetchWithAuth } from "./fetch-base";

export const fetchEntities = async <T>(
  resourceUrl: string,
  queryParams?: Record<string, string>
): Promise<T> => {
  try {
    const response = await fetchWithAuth({
      resourceUrl,
      queryParams,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("Error fetching entities:", error);
    throw error;
  }
};

// Función para mutaciones (POST, PUT, DELETE, PATCH)
export const mutateEntity = async <T>(
  resourceUrl: string,
  method: "POST" | "PUT" | "DELETE" | "PATCH",
  data?: unknown
): Promise<T> => {
  const response = await fetchWithAuth({
    resourceUrl,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
