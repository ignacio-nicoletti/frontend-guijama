import type { ReactElement } from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../../ui/sidebar";
export const AppSideBarHeader = (): ReactElement => {
  const { open } = useSidebar();
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center justify-between w-full">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <img src="/favicon.png" alt="Mega Administrador Icon" className="size-6" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Guijama</span>
              </div>
            </SidebarMenuButton>
            {open && <SidebarTrigger />}
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
