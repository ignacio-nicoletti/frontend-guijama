import { Package, Receipt, Settings, User } from "lucide-react";
import type { ElementType } from "react";

export type NavigationItem = {
  menu: string;
  menuIcon: ElementType;
  url?: string;
  subMenu: { title: string; url: string; childs?: { url: string }[] }[];
};

export const navigationItems: NavigationItem[] = [
  {
    menu: "Productos",
    menuIcon: Package,
    subMenu: [
      {
        title: "Crear",
        url: "/admin/product/create",
      },
      {
        title: "Listado",
        url: "/admin/product",
        childs: [{ url: "/admin/product/edit" }],
      },
    ],
  },
  {
    menu: "Clientes",
    menuIcon: User,
    subMenu: [
      {
        title: "Crear",
        url: "/admin/client/create",
      },
      {
        title: "Listado",
        url: "/admin/client",
        childs: [{ url: "/admin/product/edit" }],
      },
    ],
  },
  {
    menu: "Ventas",
    menuIcon: Receipt,
    subMenu: [
      {
        title: "Listado",
        url: "/admin/sell",
        childs: [{ url: "/admin/product/edit" }],
      },
    ],
  },

  {
    menu: "Configuración",
    menuIcon: Settings,
    subMenu: [
      {
        title: "Marcas",
        url: "/admin/configuration/brand",
        childs: [{ url: "/brand/create" }, { url: "/brand/edit" }],
      },
      {
        title: "Rubros",
        url: "/admin/configuration/category",
        childs: [{ url: "/category/create" }, { url: "/category/edit" }],
      },
      {
        title: "Sucursales",
        url: "/branch",
        childs: [{ url: "/branch/create" }, { url: "/branch/edit" }],
      },
      {
        title: "Proveedores",
        url: "/admin/configuration/supplier",
        childs: [{ url: "/supplier/create" }, { url: "/supplier/edit" }],
      },
    ],
  },
];
