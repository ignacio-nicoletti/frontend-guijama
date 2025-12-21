'use client';
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type PaginationState,
	type RowSelectionState,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from '@tanstack/react-table';
import { X } from 'lucide-react';
import { type ReactElement, useEffect, useMemo, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';


import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { cn } from '../../shared/utils/cn';
import type { Filter } from '../../shared/types/table/filter';

type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	paginationSize?: number;
	filters: Filter[];
	actions?: ReactElement | ReactElement[];
	isSelectable?: boolean;
	onRowSelectionChange?: (selectedRows: TData[]) => void;
	onResetSelection?: boolean;
};

export function DataTable<TData, TValue>({
	columns,
	data,
	paginationSize = 20,
	filters = [],
	actions,
	isSelectable = false,
	onRowSelectionChange,
	onResetSelection,
}: DataTableProps<TData, TValue>) {
	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: paginationSize,
	});
	const [sorting, setSorting] = useState<SortingState>([]);
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

	const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		onRowSelectionChange: isSelectable ? setRowSelection : undefined,
		state: {
			pagination,
			sorting,
			columnVisibility,
			rowSelection,
		},
	});

	useEffect(() => {
		if (onRowSelectionChange) {
			const selectedRows = table.getSelectedRowModel().flatRows.map((row) => row.original);
			onRowSelectionChange(selectedRows);
		}
	}, [rowSelection, onRowSelectionChange, table]);

	useEffect(() => {
		table.resetRowSelection();
	}, [onResetSelection, table]);

	const resetAllFilters = () => {
		for (const filter of filters) {
			table.getColumn(filter.by)?.setFilterValue(undefined);
		}
	};

	const isAnyFilterActive = filters.some((filter) => !!table.getColumn(filter.by)?.getFilterValue());
	const shouldRenderActions = Array.isArray(actions) || actions;
	const shouldRenderFilters = filters.length > 0;

	return (
		<div className="w-full">
			<div className={cn('flex items-center pb-4', shouldRenderActions ? 'gap-4' : 'gap-0')}>
				{shouldRenderActions && <div className="flex space-x-2">{actions}</div>}
				{shouldRenderFilters && (
					<div className="flex items-center gap-4">
						{filters.map((filter) => {
							if (filter.type === 'select' && Array.isArray(filter.selectOptions)) {
								return (
									<div key={filter.by} className="min-w-[180px]">
										<Select
											value={(table.getColumn(filter.by)?.getFilterValue() as string) ?? ''}
											onValueChange={(value) => {
												table
													.getColumn(filter.by)
													?.setFilterValue(value === 'Todos' ? undefined : value);
											}}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder={`Filtrar por ${filter.display}`} />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Todos">Todos</SelectItem>
												{filter.selectOptions.map((option) => (
													<SelectItem key={option.value} value={option.value}>
														{option.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								);
							}

							return (
								<Input
									key={filter.by}
									placeholder={`Buscar por ${filter.display}`}
									value={(table.getColumn(filter.by)?.getFilterValue() as string) ?? ''}
									onChange={(event) => table.getColumn(filter.by)?.setFilterValue(event.target.value)}
									className="max-w-sm bg-white"
								/>
							);
						})}
						{isAnyFilterActive && (
							<Button
								variant="outline"
								onClick={resetAllFilters}
								className="h-9 px-3"
								title="Resetear todos los filtros"
								type="button"
							>
								<X className="h-4 w-4" />
							</Button>
						)}
					</div>
				)}
			</div>
			<div className="rounded-md border overflow-x-auto">
				<div className="min-w-full inline-block align-middle">
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(header.column.columnDef.header, header.getContext())}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => {
									return (
										<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</TableCell>
											))}
										</TableRow>
									);
								})
							) : (
								<TableRow>
									<TableCell colSpan={columns.length} className="h-24 text-center">
										Sin resultados.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className="flex items-center justify-end space-x-2 py-4 px-2">
					{isSelectable && (
						<div className="text-muted-foreground flex-1 text-sm">
							{table.getFilteredSelectedRowModel().rows.length} de{' '}
							{table.getFilteredRowModel().rows.length} seleccionados.
						</div>
					)}
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Anterior
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Siguiente
					</Button>
				</div>
			</div>
		</div>
	);
}
