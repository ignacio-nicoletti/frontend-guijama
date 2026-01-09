"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { type FieldValues, type Path, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/shared/lib";

type Option = {
  value: string;
  label: string;
};

type SearchComboboxProps = {
  options: Option[];
  onValueChange?: (value: string) => void;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
};

export const SearchCombobox = ({
  options,
  onValueChange,
  searchPlaceholder = "Buscar...",
  emptyMessage = "No se encontraron resultados.",
  className,
  disabled = false,
  name,
  label,
}: SearchComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name as Path<FieldValues>}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    aria-expanded={open}
                    className={cn("w-full justify-between")}
                    disabled={disabled}
                  >
                    {field.value
                      ? options.find((option) => option.value === field.value)?.label
                      : searchPlaceholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command
                  filter={(value, search) => {
                    const entity = options.find((e) => e.value === value);
                    if (!entity) {
                      return 0;
                    }
                    if (entity.label.toLowerCase().includes(search.toLowerCase())) {
                      return 1;
                    }
                    return 0;
                  }}
                >
                  <CommandInput placeholder={searchPlaceholder} className="h-9" />
                  <CommandList>
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          onSelect={(currentValue) => {
                            const newValue = currentValue === field.value ? "" : currentValue;
                            field.onChange(newValue);
                            onValueChange?.(newValue);
                            setOpen(false);
                          }}
                        >
                          {option.label}
                          <Check
                            className={cn(
                              "ml-auto h-4 w-4",
                              field.value === option.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
