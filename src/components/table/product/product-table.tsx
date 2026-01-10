import { Filter, FilterProductSearch } from "@/shared/types";

import { useGetAllProducts } from "@/shared/hooks/query/product/use-suspense-get-all";
import { DataTable } from "../data-table";
import { buildColumns } from "./product-columns";

export const ProductTable = ({ filters }: { filters: FilterProductSearch }) => {
  const columns = buildColumns();
  const { products } = useGetAllProducts();

  const filterTable: Filter[] = [{ by: "description", display: "Descripción", type: "input" }];
  return <DataTable columns={columns} data={products ?? []} filters={filterTable} />;
};
