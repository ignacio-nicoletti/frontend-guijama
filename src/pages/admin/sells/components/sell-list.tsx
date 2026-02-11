import { SellFiltersForm } from "@/components/filters/sell-filter-form/sell-filters-form-filter";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { SellTable } from "@/components/table/sell/sell-table";
import { useClientFilters } from "@/shared/hooks/stores/use-client-filters";
import { Suspense } from "react";

export const SellList = () => {
  const { filters } = useClientFilters();

  return (
    <div className="w-full flex flex-col gap-4 px-8">
      {/* 🔥 Suspense para los filtros */}
      {/* <ErrorBoundary fallback={<div>❌ Error cargando filtros</div>}> */}
      <Suspense fallback={<div>Cargando filtros...</div>}>
        <SellFiltersForm />
      </Suspense>
      {/* </ErrorBoundary> */}

      {/* 🔥 Suspense independiente para la tabla */}
      {filters && (
        <Suspense fallback={<TableSkeleton columns={5} rows={8} />}>
          <SellTable filters={filters} />
        </Suspense>
      )}
    </div>
  );
};
