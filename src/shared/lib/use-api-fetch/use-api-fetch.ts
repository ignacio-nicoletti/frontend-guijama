export const fetchEntities = async <T>(
  resourceUrl: string,
  queryParams?: Record<string, string>,
  getToken?: () => Promise<string | null>
): Promise<T> => {
  const apiUrl = "http://localhost:3000/api/v1";

  if (!getToken) {
    throw new Error("getToken function is required");
  }

  const token = await getToken();

  if (!token) {
    throw new Error("No token found");
  }

  let urlWithParams = `${apiUrl}/${resourceUrl}`;
  if (queryParams && Object.keys(queryParams).length > 0) {
    const searchParams = new URLSearchParams(queryParams);
    urlWithParams += `?${searchParams.toString()}`;
  }

  const fetchOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(urlWithParams, fetchOptions);

  if (!response.ok) {
    throw new Error(`Error al obtener los datos, código: ${response.statusText}`);
  }

  return await response.json();
};
