// import { useAuth } from '@clerk/nextjs';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchEntities } from '../../../shared/lib/api-utils/fetch-entities';

type UseSuspenseApiFetchOptions<T> = {
	resourceUrl: string;
	queryKey: string[];
	queryParams?: Record<string, string>;
	select?: (data: T) => T;
	staleTime?: number;
	gcTime?: number;
};

type UseSuspenseApiFetchReturn<T> = {
	entity: T;
	isLoading: boolean;
	error: Error | null;
	refetch: () => Promise<unknown>;
};

export const useSuspenseApiFetch = <T>(options: UseSuspenseApiFetchOptions<T>): UseSuspenseApiFetchReturn<T> => {
	// const { getToken } = useAuth();

	const { data, isLoading, error, refetch } = useSuspenseQuery({
		queryKey: options.queryKey,
		queryFn: async (): Promise<T> => fetchEntities<T>(options.resourceUrl, options.queryParams),
		select: options.select,
		staleTime: options.staleTime,
		gcTime: options.gcTime,
	});

	return {
		entity: data,
		isLoading: isLoading,
		error: error,
		refetch: refetch,
	};
};
