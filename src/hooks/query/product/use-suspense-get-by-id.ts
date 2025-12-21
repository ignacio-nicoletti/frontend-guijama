import { useSuspenseApiFetch } from '@/hooks/query/use-suspense-api-fetch';
import type { Product } from '@/types';

export const useSuspenseGetProductById = (id: string) => {
	const { entity, isLoading, error } = useSuspenseApiFetch<Product>({
		resourceUrl: `product/${id}`,
		queryKey: ['product', id],
	});

	return { product: entity, isLoading, error };
};
