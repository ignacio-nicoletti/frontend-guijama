import { Skeleton } from '@/components/ui/skeleton';

type TableSkeletonProps = {
	columns?: number;
	rows?: number;
	showActions?: boolean;
	showPagination?: boolean;
	className?: string;
};

export const TableSkeleton = ({
	columns = 5,
	rows = 8,
	showActions = true,
	showPagination = true,
	className = '',
}: TableSkeletonProps) => {
	const skeletonColumns = Array.from({ length: columns }, (_, index) => (
		<div key={index} className="flex-1">
			<Skeleton className="h-4 w-full max-w-[120px]" />
		</div>
	));

	const skeletonRows = Array.from({ length: rows }, (_, rowIndex) => (
		<div key={rowIndex} className="flex items-center gap-4 py-3 border-b border-border/50">
			{Array.from({ length: columns }, (_, colIndex) => (
				<div key={colIndex} className="flex-1">
					<Skeleton className="h-4 w-full max-w-[100px]" />
				</div>
			))}
		</div>
	));

	return (
		<div className={`w-full ${className}`}>
			{showActions && (
				<div className="flex items-center pb-4 gap-4">
					<Skeleton className="h-9 w-32" />
				</div>
			)}

			<div className="rounded-md border overflow-hidden">
				<div className="flex items-center gap-4 p-4 border-b bg-muted/50">{skeletonColumns}</div>

				<div className="p-4 space-y-2">{skeletonRows}</div>

				{showPagination && (
					<div className="flex items-center justify-end space-x-2 py-4 px-4 border-t">
						<Skeleton className="h-8 w-16" />
						<Skeleton className="h-8 w-20" />
					</div>
				)}
			</div>
		</div>
	);
};
