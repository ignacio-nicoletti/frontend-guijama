export const buildQueryString = (filters: Record<string, any>): string => {
	const params = new URLSearchParams();

	Object.entries(filters).forEach(([key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			params.append(key, String(value).trim());
		}
	});

	return params.toString();
};

export const validateSearchParams = (searchParams: URLSearchParams, allowedParams: string[]): string => {
	const validParams = new URLSearchParams();

	for (const [key, value] of searchParams.entries()) {
		if (allowedParams.includes(key) && value.trim() !== '') {
			validParams.append(key, value.trim());
		}
	}

	return validParams.toString();
};

export const createApiUrl = (basePath: string, queryString: string): string => {
	return queryString ? `${basePath}?${queryString}` : basePath;
};
