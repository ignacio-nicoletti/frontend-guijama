"use client";
import { CustomCard } from "@/components/card/custom-card";
import { CustomButton } from "@/components/form/button/custom-button";
import Layout from "@/components/layout/layout";
import { Form } from "@/components/ui/form";
import { useApiRequest } from "@/shared/hooks";
import { useSuspenseGetClientById } from "@/shared/hooks/query/client/use-suspense-get-by-id";
import { ClientFormType, clientSchema } from "@/shared/schemas/client/client.schema";
import { ClientUpsertRequest } from "@/shared/types/client/client-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ClientFormFields } from "../components/client-form-fields";

export default function ClientEditPage() {
  const { apiRequest } = useApiRequest<ClientUpsertRequest>();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const clientId = params.id as string;
  const navigate = useNavigate();

  const { client } = useSuspenseGetClientById(clientId);

  const form = useForm<ClientFormType>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      firstName: client?.firstName ?? undefined,
      lastName: client?.lastName ?? undefined,
      dni: client?.dni ?? undefined,
      phone: client?.phone ?? undefined,
      email: client?.email || "",
      address: "",
      isView: false,
    },
  });

  function onSubmit(values: ClientFormType) {
    startTransition(async () => {
      try {
        await apiRequest({
          endpoint: `/client/${clientId}`,
          method: "PUT",
          body: {
            firstName: values.firstName,
            lastName: values.lastName,
            dni: values.dni,
            phone: values.phone,
            email: values.email || undefined,
          },
          successMessage: "Cliente actualizado correctamente!",
          errorMessage: "Ocurrió un problema al actualizar el Cliente.",
        });
        navigate("/admin/client");
      } catch (error) {
        console.error("Failed to update client:", error);
      }
    });
  }

  return (
    <Layout>
      <CustomCard
        title="Actualizar cliente"
        content={
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ClientFormFields />
              <div className="flex justify-end">
                <CustomButton type="submit" isLoading={isPending}>
                  Actualizar
                </CustomButton>
              </div>
            </form>
          </Form>
        }
      />
    </Layout>
  );
}
