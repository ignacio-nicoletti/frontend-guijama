import { SupplierFiltersForm } from "@/components/filters/supplier-filter-form/supplier-filters-form-filter";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { SupplierTable } from "@/components/table/supplier/supplier-table";
import { useClientFilters } from "@/shared/hooks/stores/use-client-filters";
import { Suspense } from "react";

export const SupplierList = () => {
  const { filters } = useClientFilters();

  return (
    <div className="w-full flex flex-col gap-4 px-8">
      {/* 🔥 Suspense para los filtros */}
      {/* <ErrorBoundary fallback={<div>❌ Error cargando filtros</div>}> */}
      <Suspense fallback={<div>Cargando filtros...</div>}>
        <SupplierFiltersForm />
      </Suspense>
      {/* </ErrorBoundary> */}

      {/* 🔥 Suspense independiente para la tabla */}
      {filters && (
        <Suspense fallback={<TableSkeleton columns={5} rows={8} />}>
          <SupplierTable filters={filters} />
        </Suspense>
      )}
    </div>
  );
};
