import { Filter } from "@/shared/types";

import { useGetAllSells } from "@/shared/hooks/query/sell/use-suspense-get-all";
import { FilterSellSearch } from "@/shared/types/table/filter";
import { DataTable } from "../data-table";
import { buildSellColumns } from "./sell-columns";

export const SellTable = ({ filters }: { filters: FilterSellSearch }) => {
  const columns = buildSellColumns();
  const { sells } = useGetAllSells();

  const filterTable: Filter[] = [{ by: "title", display: "Titulo", type: "input" }];
  return <DataTable columns={columns} data={sells ?? []} filters={filterTable} />;
};
