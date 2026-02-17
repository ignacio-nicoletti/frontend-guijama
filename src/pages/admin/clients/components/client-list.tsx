import { ClientFiltersForm } from "@/components/filters/client-filter-form/client-filters-form-filter";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";
import { ClientTable } from "@/components/table/client/client-table";
import { useClientFilters } from "@/shared/hooks/stores/use-client-filters";
import { Suspense } from "react";

export const ClientList = () => {
  const { filters } = useClientFilters();

  return (
    <div className="w-full flex flex-col gap-4 px-8">
      <ClientFiltersForm />

      {filters && (
        <Suspense fallback={<TableSkeleton columns={5} rows={8} />}>
          <ClientTable filters={filters} />
        </Suspense>
      )}
    </div>
  );
};
