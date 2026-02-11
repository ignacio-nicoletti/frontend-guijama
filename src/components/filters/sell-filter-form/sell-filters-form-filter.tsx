"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eraser, Search } from "lucide-react";
import { useForm } from "react-hook-form";

import { useClientFilters } from "@/shared/hooks/stores/use-client-filters";

import {
  FilterClientFormType,
  filterClientSchema,
} from "@/shared/schemas/filter/filter-client.schema";
import { FilterClientSearch } from "@/shared/types/table/filter";
import { CustomButton } from "../../form/button/custom-button";
import { Form } from "../../ui/form";

export const SellFiltersForm = () => {
  const { filters, setFilters, clearFilters } = useClientFilters();

  const form = useForm<FilterClientFormType>({
    resolver: zodResolver(filterClientSchema),
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = (values: FilterClientSearch) => {
    setFilters(values);
  };

  const onClear = () => {
    form.reset();
    clearFilters();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-1 gap-4"></div>

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
