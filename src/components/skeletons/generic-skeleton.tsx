import { Skeleton } from '@/components/ui/skeleton';

export function GenericSkeleton() {
	return (
		<div className="flex flex-col items-center">
			<Skeleton className="h-[600px] w-full rounded-md" />
		</div>
	);
}
