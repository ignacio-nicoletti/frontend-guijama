

import { buildQueryString } from '../../../shared/utils/query-params';
import type { FilterProductSearch, Product } from '../../../shared/types';
import { useSuspenseApiFetch } from './use-suspense-api-fetch';


export const useSuspenseGetAllProducts = (filters: FilterProductSearch) => {
	const queryString = buildQueryString(filters);
	const resourceUrl = queryString ? `product/?${queryString}` : 'product';

	const { entity, isLoading, error } = useSuspenseApiFetch<Product[]>({
		resourceUrl,
		queryKey: ['products', queryString],
	});

	return { products: entity, isLoading, error };
};
