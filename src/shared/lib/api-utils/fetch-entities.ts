import { fetchWithAuth } from './fetch-base';

export const fetchEntities = async <T>(
	resourceUrl: string,
	queryParams?: Record<string, string>,
	getToken?: (options?: { template?: string }) => Promise<string | null>
): Promise<T> => {
	const response = await fetchWithAuth(
		{
			resourceUrl,
			queryParams,
			headers: {
				'Content-Type': 'application/json',
			},
		},
		getToken
	);

	return await response.json();
};
