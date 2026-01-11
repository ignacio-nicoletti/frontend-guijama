import { Outlet } from "react-router-dom";
import { AppSideBar } from "../sidebar/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

export default function ConfigurationLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <AppSideBar />
      </SidebarProvider>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
