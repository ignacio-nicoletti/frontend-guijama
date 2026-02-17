import Layout from "@/components/layout/layout";
import { GenericSkeleton } from "@/components/skeletons/generic-skeleton";
import { SubNavbarItem } from "@/components/sub-navbar-items/sub-navbar-item";
import { Suspense } from "react";
import { SupplierList } from "../../suppliers/components/supplier-list";

export function ConfigurationSupplierPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat items-center gap-4 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      >
        <SubNavbarItem />
        <div className="bg-secondary w-full text-center py-2">
          <p className="text-3xl text-white font-semibold">Listado de proveedores</p>
        </div>
        <Suspense fallback={<GenericSkeleton />}>
          <SupplierList />
        </Suspense>
      </div>
    </Layout>
  );
}
