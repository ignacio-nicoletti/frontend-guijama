"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

import { TableSortableHeader } from "../components/table-sortable-header";
import { Button } from "../../ui/button";
import type { Product, Category, Brand } from "../../../shared/types";

export const buildColumns = (): ColumnDef<Product>[] => [
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Rubro" />
        </div>
      );
    },
    cell: ({ row }) => {
      const category: Category = row.getValue("category");
      return (
        <div className="text-start pl-4">{category ? category.name : ""}</div>
      );
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Marca" />
        </div>
      );
    },
    cell: ({ row }) => {
      const brand: Brand = row.getValue("brand");
      return <div className="text-start">{brand ? brand.name : ""}</div>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Descripción" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize text-start pl-8">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "fullCode",
    header: ({ column }) => {
      return (
        <div className="flex justify-start">
          <TableSortableHeader column={column} title="Código" />
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
    //   const router = useRouter();
    //   const product = row.original;

      const handleEdit = () => {
        // router.push(`/product/edit/${product.id}`);
      };

      return (
        <div className="flex justify-end gap-4">
          <Button
            size={"icon"}
            variant={"outline"}
            asChild
            title="Editar"
            className="p-2 cursor-pointer"
            onClick={handleEdit}
          >
            <Pencil />
          </Button>
        </div>
      );
    },
  },
];
