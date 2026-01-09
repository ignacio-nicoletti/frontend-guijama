import { Filter, FilterProductSearch } from "@/shared/types";
import { useSuspenseGetAllProducts } from "../../../shared/hooks/query";

import { DataTable } from "../data-table";
import { buildColumns } from "./product-columns";

export const ProductTable = ({ filters }: { filters: FilterProductSearch }) => {
  const columns = buildColumns();
  const { products } = useSuspenseGetAllProducts(filters);

  const filterTable: Filter[] = [{ by: "description", display: "Descripción", type: "input" }];
  return <DataTable columns={columns} data={products ?? []} filters={filterTable} />;
};
