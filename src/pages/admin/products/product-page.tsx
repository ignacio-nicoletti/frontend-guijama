import { ErrorBoundary, ErrorFallback } from "@/components/error-boundary";
import { Suspense } from "react";
import Layout from "../../../components/layout/layout";
import { GenericSkeleton } from "../../../components/skeletons/generic-skeleton";
import { ProductList } from "./components/product-list";

export function ProductPage() {
  return (
    <Layout>
      <ErrorBoundary
        fallback={(error, resetError) => (
          <ErrorFallback
            error={error}
            resetError={resetError}
            title="Error al cargar productos"
            description="No se pudieron cargar los productos. Por favor, intente nuevamente."
            resetQueryKey="products"
          />
        )}
        showToast={false}
      >
        <Suspense fallback={<GenericSkeleton />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
