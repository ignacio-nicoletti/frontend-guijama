import { Filter } from "@/shared/types";

import { useGetAllClients } from "@/shared/hooks/query/client/use-suspense-get-all";
import { FilterClientSearch } from "@/shared/types/table/filter";
import { DataTable } from "../data-table";
import { buildClientColumns } from "./client-columns";

export const ClientTable = ({ filters }: { filters: FilterClientSearch }) => {
  const columns = buildClientColumns();
  const { clients } = useGetAllClients();
  console.log(clients);

  const filterTable: Filter[] = [{ by: "title", display: "Titulo", type: "input" }];
  return <DataTable columns={columns} data={clients ?? []} filters={filterTable} />;
};
