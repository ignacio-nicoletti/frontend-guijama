import { Package, Settings } from "lucide-react";
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
        url: "/product/create",
      },
      {
        title: "Listado",
        url: "/admin/products",
        childs: [{ url: "/product/edit" }],
      },
    ],
  },

  {
    menu: "Configuración",
    menuIcon: Settings,
    subMenu: [
      //   {
      //     title: "Sucursales",
      //     url: "/branch",
      //     childs: [{ url: "/branch/create" }, { url: "/branch/edit" }],
      //   },
      {
        title: "Rubros",
        url: "/admin/configuration/category",
        childs: [{ url: "/category/create" }, { url: "/category/edit" }],
      },
      {
        title: "Marcas",
        url: "/admin/configuration/brand",
        childs: [{ url: "/brand/create" }, { url: "/brand/edit" }],
      },
      {
        title: "Proveedores",
        url: "/admin/configuration/supplier",
        childs: [{ url: "/supplier/create" }, { url: "/supplier/edit" }],
      },
      {
        title: "Clientes",
        url: "/admin/configuration/client",
        childs: [{ url: "/supplier/create" }, { url: "/supplier/edit" }],
      },
    ],
  },
];
