import { GenericSkeleton } from "@/components/skeletons/generic-skeleton";
import { Suspense } from "react";
import Layout from "../../../components/layout/layout";
import { ClientList } from "./components/client-list";

export function ClientsPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat  items-center gap-4 rounded-lg shadow-lg "
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      >
        <div className="bg-secondary w-full text-center py-2">
          <p className="text-3xl text-white font-semibold">Listado de clientes</p>
        </div>

        <Suspense fallback={<GenericSkeleton />}>
          <ClientList />
        </Suspense>
      </div>
    </Layout>
  );
}
