import type { CustomError } from "../../types";

type FetchOptions = {
	resourceUrl: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	headers?: Record<string, string>;
	body?: unknown;
	queryParams?: Record<string, string>;
	cache?: RequestCache;
};

export const fetchWithAuth = async (
	options: FetchOptions,
	getToken?: (options?: { template?: string }) => Promise<string | null>
): Promise<Response> => {
	const apiUrl = import.meta.env.VITE_API_URL;

	if (!getToken) {
		throw new Error('getToken function is required');
	}

	const template = '__token_clerk';
	const token = await getToken({ template });

	if (!token) {
		const error: CustomError = new Error('Unauthorized: Token not found');
		error.status = 401;
		throw error;
	}

	// Build URL with query params if provided
	let url = `${apiUrl}/${options.resourceUrl}`;
	if (options.queryParams && Object.keys(options.queryParams).length > 0) {
		const searchParams = new URLSearchParams(options.queryParams);
		url += `?${searchParams.toString()}`;
	}

	// Build headers
	const headers: Record<string, string> = {
		Authorization: `Bearer ${token}`,
		...options.headers,
	};

	// Build fetch options
	const fetchOptions: RequestInit = {
		method: options.method || 'GET',
		headers,
		cache: options.cache || 'default',
	};

	if (options.body) {
		fetchOptions.body = JSON.stringify(options.body);
	}

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		throw new Error(`Error en la solicitud, código: ${response.statusText}`);
	}

	return response;
};
