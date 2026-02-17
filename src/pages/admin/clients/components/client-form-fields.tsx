import { CustomFormField } from "@/components/form/form-field/custom-form-field";
import { Separator } from "@/components/ui/separator";
import { useWatch } from "react-hook-form";

export const ClientFormFields = () => {
  const isView = useWatch({ name: "isView" });
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <CustomFormField
            name="firstName"
            label="Nombre"
            placeholder="Ingrese el nombre"
            disabled={isView}
          />
        </div>
        <Separator orientation="vertical" className="h-18" />
        <div className="flex-1">
          <CustomFormField
            name="lastName"
            label="Apellido"
            placeholder="Ingrese el apellido"
            disabled={isView}
          />
        </div>
        <Separator orientation="vertical" className="h-18" />
        <div className="flex-1">
          <CustomFormField name="dni" label="DNI" placeholder="Ingrese el DNI" disabled={isView} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <CustomFormField
            name="phone"
            label="Teléfono"
            placeholder="Ingrese el teléfono"
            disabled={isView}
          />
        </div>
        <Separator orientation="vertical" className="h-18" />
        <div className="flex-1">
          <CustomFormField
            name="email"
            label="Email"
            placeholder="Ingrese el email"
            type="email"
            disabled={isView}
          />
        </div>
        <Separator orientation="vertical" className="h-18" />
        <div className="flex-1">
          <CustomFormField
            name="address"
            label="Dirección"
            placeholder="Ingrese la dirección"
            disabled={isView}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Separator orientation="vertical" className="h-18" />
        <div className="flex-1">
          <CustomFormField
            name="notes"
            label="Notas"
            placeholder="Ingrese notas adicionales"
            disabled={isView}
          />
        </div>
      </div>
    </>
  );
};
