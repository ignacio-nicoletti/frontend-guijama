import { ErrorBoundary, ErrorFallback } from "@/components/error-boundary";
import { GenericSkeleton } from "@/components/skeletons/generic-skeleton";
import { Suspense } from "react";
import Layout from "../../../components/layout/layout";
import { ClientList } from "./components/client-list";

export function ClientsPage() {
  return (
    <Layout>
      <ErrorBoundary
        fallback={(error, resetError) => (
          <ErrorFallback
            error={error}
            resetError={resetError}
            title="Error al cargar clientes"
            description="No se pudieron cargar los clientes. Por favor, intente nuevamente."
            resetQueryKey="clients"
          />
        )}
        showToast={false}
      >
        <Suspense fallback={<GenericSkeleton />}>
          <ClientList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
