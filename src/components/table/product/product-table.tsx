import { DataTable } from "../data-table";
import { buildColumns } from "./product-columns";
import type { Filter, FilterProductSearch } from "../../../shared/types";
import { useSuspenseGetAllProducts } from "../../../hooks/query/product/use-suspense-get-all";

export const ProductTable = ({ filters }: { filters: FilterProductSearch }) => {
  const columns = buildColumns();
  const { products } = useSuspenseGetAllProducts(filters);

  const filterTable: Filter[] = [
    { by: "description", display: "Descripción", type: "input" },
  ];
  return (
    <DataTable columns={columns} data={products ?? []} filters={filterTable} />
  );
};
