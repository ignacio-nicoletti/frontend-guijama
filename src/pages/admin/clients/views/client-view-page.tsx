"use client";
import { CustomCard } from "@/components/card/custom-card";
import Layout from "@/components/layout/layout";
import { Form } from "@/components/ui/form";
import { useSuspenseGetClientById } from "@/shared/hooks/query/client/use-suspense-get-by-id";
import { ClientFormType, clientSchema } from "@/shared/schemas/client/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ClientFormFields } from "../components/client-form-fields";

export default function ClientViewPage() {
  const params = useParams();
  const clientId = params.id as string;

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

  return (
    <Layout>
      <CustomCard
        title="Detalle de cliente"
        content={
          <Form {...form}>
            <form className="space-y-6">
              <ClientFormFields />
            </form>
          </Form>
        }
      />
    </Layout>
  );
}
