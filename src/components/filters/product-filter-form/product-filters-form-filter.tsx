"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eraser, Search } from "lucide-react";
import { useForm } from "react-hook-form";

import { SearchCombobox } from "@/components/form/search-combobox/search-combobox";
import { useGetAllBrands } from "@/shared/hooks/query/brand/use-suspense-get-all-active";
import { useGetAllCategory } from "@/shared/hooks/query/category/use-suspense-get-all-category";

import {
  FilterProductFormType,
  filterProductSchema,
} from "@/shared/schemas/filter/filter-product.schema";
import { useProductFilters } from "../../../shared/hooks/stores";
import type { FilterProductSearch } from "../../../shared/types";
import { CustomButton } from "../../form/button/custom-button";
import { Form } from "../../ui/form";

export const ProductFiltersForm = () => {
  const { filters, setFilters, clearFilters } = useProductFilters();
  const { brands } = useGetAllBrands();
  const { categories } = useGetAllCategory();

  const form = useForm<FilterProductFormType>({
    resolver: zodResolver(filterProductSchema),
    defaultValues: {
      brandId: filters?.brandId || "",
      categoryId: filters?.categoryId || "",
      code: filters?.code || "",
      title: filters?.title || "",
    },
  });

  const onSubmit = (values: FilterProductSearch) => {
    setFilters(values);
  };

  const onClear = () => {
    form.reset();
    clearFilters();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-1 gap-4">
          <div className="flex-1">
            <SearchCombobox
              name="categoryId"
              options={
                categories?.map((categorie) => ({
                  value: categorie.id,
                  label: categorie.name,
                })) || []
              }
              label="Rubro"
              searchPlaceholder="Buscar categoria"
              emptyMessage="No se encontraron categoria"
            />
          </div>
          <div className="flex-1">
            <SearchCombobox
              name="brandId"
              options={
                brands?.map((brand) => ({
                  value: brand.id,
                  label: brand.name,
                })) || []
              }
              label="Marca"
              searchPlaceholder="Buscar marca"
              emptyMessage="No se encontraron marcas"
            />
          </div>
          <div className="flex-1">
            <SearchCombobox
              name="code"
              options={
                categories?.map((category) => ({
                  value: category.id,
                  label: category.name,
                })) || []
              }
              label="Codigo"
              searchPlaceholder="Buscar Codigo"
              emptyMessage="No se encontraron codigos"
              disabled
            />
          </div>

          <div className="flex-1">
            <SearchCombobox
              name="brandId"
              options={
                brands?.map((brand) => ({
                  value: brand.id,
                  label: brand.name,
                })) || []
              }
              label="Titulo"
              searchPlaceholder="Buscar marca"
              emptyMessage="No se encontraron marcas"
              disabled
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <CustomButton variant="outline" onClick={onClear} className="px-6 py-2">
            <Eraser className="w-4 h-4" />
            Limpiar
          </CustomButton>
          <CustomButton type="submit" className="px-6 py-2">
            <Search className="w-4 h-4" />
            Buscar
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};
