"use client";
import { CustomCard } from "@/components/card/custom-card";
import { CustomButton } from "@/components/form/button/custom-button";
import Layout from "@/components/layout/layout";
import { Form } from "@/components/ui/form";
import { useApiRequest } from "@/shared/hooks";
import { ClientFormType, clientSchema } from "@/shared/schemas/client/client.schema";
import { ClientUpsertRequest } from "@/shared/types/client/client-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ClientFormFields } from "../components/client-form-fields";

export default function ClientCreatePage() {
  const { apiRequest } = useApiRequest<ClientUpsertRequest>();
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const form = useForm<ClientFormType>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dni: "",
      phone: "",
      address: "",
      email: "",
      isView: false,
    },
  });

  function onSubmit(values: ClientFormType) {
    // Tipo específico en lugar de FieldValues
    startTransition(async () => {
      try {
        await apiRequest({
          endpoint: "/client",
          method: "POST",
          body: {
            firstName: values.firstName,
            lastName: values.lastName,
            dni: values.dni,
            phone: values.phone,
            email: values.email || undefined,
          },
          successMessage: "Cliente creado correctamente!",
          errorMessage: "Ocurrió un problema al crear el Cliente.",
        });
        navigate("/admin/client");
      } catch (error) {
        console.error("Failed to create client:", error);
      }
    });
  }

  return (
    <Layout>
      <CustomCard
        title="Crear cliente"
        content={
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ClientFormFields />
              <div className="flex justify-end">
                <CustomButton type="submit" isLoading={isPending}>
                  Crear
                </CustomButton>
              </div>
            </form>
          </Form>
        }
      />
    </Layout>
  );
}
