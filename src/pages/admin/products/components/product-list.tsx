import { Suspense } from 'react';
import { TableSkeleton } from '../../../../components/skeletons/table-skeleton';
import { ProductTable } from '../../../../components/table/product/product-table';
// import { ProductFiltersForm } from '@/components/filters';
// import { useProductFilters } from '@/hooks/stores';

export const ProductList = () => {
	// const { filters } = useProductFilters();

	return (
		<div className="flex flex-col gap-4">
			{/* <ProductFiltersForm /> */}
			{/* {filters && ( */}
				{/* <Suspense fallback={<TableSkeleton columns={5} rows={8} />}> */}
					<ProductTable filters={{}} />
				{/* </Suspense> */}
			{/* )} */}
		</div>
	);
};
