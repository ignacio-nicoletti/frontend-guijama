import type { ReactElement } from "react";
import { Sidebar, SidebarProvider, SidebarTrigger, useSidebar } from "../ui/sidebar";
import { AppSideBarContent } from "./components/sidebar-content";
import { AppSideBarHeader } from "./components/sidebar-header";

export function AppSideBar(): ReactElement {
  const { open, isMobile } = useSidebar();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <AppSideBarHeader />
        <AppSideBarContent />
      </Sidebar>
      <div className="mt-3">{(!open || isMobile) && <SidebarTrigger />}</div>
    </SidebarProvider>
  );
}
