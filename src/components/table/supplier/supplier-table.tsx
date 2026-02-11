import { Filter } from "@/shared/types";

import { useGetAllSuppliers } from "@/shared/hooks/query/supplier/use-suspense-get-all";
import { FilterSellSearch } from "@/shared/types/table/filter";
import { DataTable } from "../data-table";
import { buildSupplierColumns } from "./supplier-columns";

export const SupplierTable = ({ filters }: { filters: FilterSellSearch }) => {
  const columns = buildSupplierColumns();
  const { suppliers } = useGetAllSuppliers();

  const filterTable: Filter[] = [{ by: "title", display: "Titulo", type: "input" }];
  return <DataTable columns={columns} data={suppliers ?? []} filters={filterTable} />;
};
