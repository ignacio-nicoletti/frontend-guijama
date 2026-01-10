import { ProductFiltersForm } from "@/components/filters";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { ProductTable } from "@/components/table/product/product-table";
import { useProductFilters } from "@/shared/hooks/stores";
import { Suspense } from "react";

export const ProductList = () => {
  const { filters } = useProductFilters();

  return (
    <div className="w-full flex flex-col gap-4 px-8">
      {/* 🔥 Suspense para los filtros */}
      {/* <ErrorBoundary fallback={<div>❌ Error cargando filtros</div>}> */}
      <Suspense fallback={<div>Cargando filtros...</div>}>
        <ProductFiltersForm />
      </Suspense>
      {/* </ErrorBoundary> */}

      {/* 🔥 Suspense independiente para la tabla */}
      {filters && (
        <Suspense fallback={<TableSkeleton columns={5} rows={8} />}>
          <ProductTable filters={filters} />
        </Suspense>
      )}
    </div>
  );
};
