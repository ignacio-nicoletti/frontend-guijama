import type { Column } from '@tanstack/react-table';
import { ChevronsUpDown } from 'lucide-react';
import type { ReactElement } from 'react';
import { Button } from '@/components/ui/button';

type TableSortableHeaderProps<T> = {
	column: Column<T>;
	title: string;
};

export const TableSortableHeader = <T,>({ column, title }: TableSortableHeaderProps<T>): ReactElement => {
	return (
		<Button variant="ghost" onClick={(): void => column.toggleSorting(column.getIsSorted() === 'asc')}>
			{title}
			<ChevronsUpDown className="ml-2 h-4 w-4" />
		</Button>
	);
};
