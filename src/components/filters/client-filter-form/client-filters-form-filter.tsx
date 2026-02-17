"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eraser, Search } from "lucide-react";
import { useForm } from "react-hook-form";

import { useClientFilters } from "@/shared/hooks/stores/use-client-filters";

import { CustomCard } from "@/components/card/custom-card";
import { CustomFormField } from "@/components/form/form-field/custom-form-field";
import {
  FilterClientFormType,
  filterClientSchema,
} from "@/shared/schemas/filter/filter-client.schema";
import { FilterClientSearch } from "@/shared/types/filter-search";
import { CustomButton } from "../../form/button/custom-button";
import { Form } from "../../ui/form";

export const ClientFiltersForm = () => {
  const { filters, setFilters, clearFilters } = useClientFilters();

  const form = useForm<FilterClientFormType>({
    resolver: zodResolver(filterClientSchema),
    defaultValues: {
      firstName: filters?.firstName,
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
    <CustomCard
      title="Listado de clientes"
      className="w-1/2"
      content={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-1 gap-4">
              <div className="flex-1">
                <CustomFormField name="firstName" label="Nombre" placeholder="Buscar por nombre" />
              </div>
              <div className="flex-1">
                <CustomFormField
                  name="lastName"
                  label="Apellido"
                  placeholder="Buscar por apellido"
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
      }
    />
  );
};
