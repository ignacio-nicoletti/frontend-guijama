// frontend/src/lib/fetch-base.ts (con timeout)
const BASE_URL = import.meta.env.VITE_BACK_URL || "http://localhost:3000";
const FETCH_TIMEOUT = 10000; // 10 segundos

export interface FetchWithAuthOptions {
  resourceUrl: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
  queryParams?: Record<string, string>;
}

export const fetchWithAuth = async ({
  resourceUrl,
  method = "GET",
  headers = {},
  body,
  queryParams,
}: FetchWithAuthOptions): Promise<Response> => {
  // Construir la URL completa
  const fullUrl = `${BASE_URL}${resourceUrl}`;

  // Construir URL con query params
  const urlWithParams = queryParams
    ? `${fullUrl}?${new URLSearchParams(queryParams).toString()}`
    : fullUrl;

  console.log("🚀 fetchWithAuth INICIANDO:", {
    url: urlWithParams,
    method,
    timestamp: new Date().toISOString(),
  });

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    console.error("⏰ TIMEOUT: La petición está tardando demasiado");
    controller.abort();
  }, FETCH_TIMEOUT);

  try {
    const config: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: "include",
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal, // Añadir signal para abort
    };

    console.log("⏳ Enviando fetch con timeout de", FETCH_TIMEOUT, "ms...");
    const startTime = Date.now();

    const response = await fetch(urlWithParams, config);
    clearTimeout(timeoutId);

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log("📥 fetchWithAuth RESPONSE RECIBIDA:", {
      url: response.url,
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      duration: `${duration}ms`,
      timestamp: new Date().toISOString(),
    });

    // Log detallado del estado
    if (!response.ok) {
      console.error("❌ Response NOT OK - Status:", response.status);

      // Intentar obtener más detalles
      try {
        const clonedResponse = response.clone();
        const errorText = await clonedResponse.text();
        console.error("❌ Error body:", errorText.substring(0, 300));

        // Verificar si es un error CORS
        if (response.type === "opaque" || response.type === "opaqueredirect") {
          console.error("🚫 Posible error CORS - Response type:", response.type);
        }
      } catch (readError) {
        console.error("❌ No se pudo leer error body:", readError);
      }
    } else {
      console.log("✅ Response OK - Procesando...");
    }

    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      console.error("⏰ ERROR: La petición fue abortada por timeout");
      throw new Error(`Timeout de ${FETCH_TIMEOUT}ms excedido para ${urlWithParams}`);
    }

    console.error("💥 fetchWithAuth ERROR:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    // Verificar si es error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      console.error("🌐 ERROR DE RED: Verifica que el backend esté corriendo");
    }

    throw error;
  }
};
