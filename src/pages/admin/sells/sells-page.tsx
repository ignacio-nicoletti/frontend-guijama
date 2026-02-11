import { GenericSkeleton } from "@/components/skeletons/generic-skeleton";
import { Suspense } from "react";
import Layout from "../../../components/layout/layout";
import { SubNavbarItem } from "../../../components/sub-navbar-items/sub-navbar-item";
import { SellList } from "./components/sell-list";

export function SellsPage() {
  return (
    <Layout>
      <div
        className="flex flex-col z-10  min-h-full min-w-full bg-cover bg-center bg-no-repeat pt-[2.5%] items-center gap-4 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('./src/assets/backgroundLogin.svg')" }}
      >
        <SubNavbarItem />
        <div className="bg-secondary w-full text-center py-2">
          <p className="text-3xl text-white font-semibold">Listado de ventas</p>
        </div>
        <Suspense fallback={<GenericSkeleton />}>
          <SellList />
        </Suspense>
      </div>
    </Layout>
  );
}
