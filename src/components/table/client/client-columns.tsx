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
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Apellido" />
        </div>
      );
    },
  },

  {
    accessorKey: "dni",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="DNI" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">{row.getValue("dni") || "-"}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Telefono" />
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize text-start pl-8">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="email" />
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize text-start pl-8">{row.getValue("email")}</div>,
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
