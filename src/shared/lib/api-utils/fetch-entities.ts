// src/shared/lib/fetch-entities.ts
export async function fetchEntities<T>(resource: string): Promise<T> {
  const url = `http://localhost:3000/api/v1/${resource}`;

  console.log("🌐 Fetching:", url);

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}
