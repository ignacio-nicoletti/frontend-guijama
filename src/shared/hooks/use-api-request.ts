'use client';
import { useAuth } from '@clerk/nextjs';
import { type QueryKey, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { CustomError } from '../types';
// import { useLoading } from '@/hooks/stores';


type ApiRequestOptions<T> = {
	endpoint: string;
	method?: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	body?: T;
	successMessage?: string;
	errorMessage?: string;
	invalidateQueries?: QueryKey[];
};

type ApiErrorResponse = {
	message?: string;
	detail?: string;
	[key: string]: unknown;
};

export const getErrorMessageTitle = (error: ApiErrorResponse): string => {
	switch (error.code) {
		case 400:
			return 'Error de validación';
		case 401:
			return 'No autorizado';
		case 409:
			return 'Conflicto';
		case 500:
			return 'Algo salió mal';
		default:
			return 'Algo salió mal';
	}
};

export const useApiRequest = <T, R = unknown>() => {
	const { showLoading, hideLoading } = useLoading();
	const { getToken } = useAuth();
	const queryClient = useQueryClient();
	const mutation = useMutation<R, CustomError, ApiRequestOptions<T>>({
		mutationFn: async (options: ApiRequestOptions<T>): Promise<R> => {
			const { endpoint, method = 'POST', body } = options;

			try {
				showLoading();
				const template = '__token_clerk';
				const token = await getToken({ template });

				const headers: Record<string, string> = {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				};
				const apiUrl = process.env.NEXT_PUBLIC_API_URL;
				const response = await fetch(`${apiUrl}${endpoint}`, {
					method,
					headers: headers,
					body: body ? JSON.stringify(body) : null,
					cache: 'no-store',
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw errorData;
				}

				const textData = await response.text();
				if (!textData) {
					return null as R;
				}
				return JSON.parse(textData) as R;
			} finally {
				hideLoading();
			}
		},
		onSuccess: async (_data: R, variables: ApiRequestOptions<T>) => {
			if (variables.invalidateQueries && variables.invalidateQueries.length > 0) {
				await Promise.all(
					variables.invalidateQueries.map((queryKey) => queryClient.invalidateQueries({ queryKey }))
				);
			}

			if (variables.successMessage) {
				toast.success('Operación exitosa.', {
					description: variables.successMessage,
				});
			}
		},
		onError: (error: unknown): void => {
			toast.error(getErrorMessageTitle(error as ApiErrorResponse), {
				description: (error as ApiErrorResponse).detail,
				duration: 5000,
			});
		},
	});

	const apiRequest = (options: ApiRequestOptions<T>): Promise<R> => {
		return mutation.mutateAsync(options);
	};

	return {
		apiRequest,
		isLoading: mutation.isPending,
		data: mutation.data,
		error: mutation.error,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
	};
};
