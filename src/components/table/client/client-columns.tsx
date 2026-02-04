"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

import { Client } from "@/shared/types/client/client";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { TableSortableHeader } from "../components/table-sortable-header";

export const buildClientColumns = (): ColumnDef<Client>[] => [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Nombre" />
        </div>
      );
    },
  },
  {
    accessorKey: "LastName",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Apellido" />
        </div>
      );
    },
  },

  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Titulo" />
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize text-start pl-8">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "priceCost",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Precio Costo" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">{row.getValue("priceCost")} $</div>
    ),
  },
  {
    accessorKey: "priceList",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Precio Lista" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">{row.getValue("priceList")} $</div>
    ),
  },
  {
    accessorKey: "priceX10",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Precio X10" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">{row.getValue("priceX10")} $</div>
    ),
  },
  {
    accessorKey: "priceX100",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Precio X100" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">{row.getValue("priceX100")} $</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const router = useNavigate();
      const product = row.original;

      const handleEdit = () => {
        router(`/admin/product/edit/${product.id}`);
      };

      return (
        <div className="flex justify-end gap-4">
          <Button
            size={"icon"}
            variant={"outline"}
            title="Editar"
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleEdit}
          >
            <Pencil size={16} />
          </Button>
        </div>
      );
    },
  },
];
