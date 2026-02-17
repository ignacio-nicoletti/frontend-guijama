import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';

type ErrorFallbackProps = {
	error: Error;
	resetError: () => void;
	title?: string;
	description?: string;
	resetQueryKey: string;
};

export const ErrorFallback = ({
	error,
	resetError,
	title = 'Something went wrong',
	description,
	resetQueryKey,
}: ErrorFallbackProps) => {
	const queryClient = useQueryClient();

	const handleErrorReset = () => {
		queryClient.resetQueries({ queryKey: [resetQueryKey] });
		resetError();
	};

	return (
		<div className="flex flex-col items-center justify-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow-xs">
			<div className="space-y-2 text-center">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm text-muted-foreground">
					{description || error.message || 'An unexpected error occurred'}
				</p>
			</div>
			<Button onClick={handleErrorReset} variant="outline" className="mt-4">
				<ReloadIcon className="mr-2 h-4 w-4" /> Algo salió mal
			</Button>
		</div>
	);
};
