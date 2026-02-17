import React from "react";
import { AppSideBar } from "../sidebar/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`antialiased`}>
      <SidebarProvider>
        <AppSideBar />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">{children}</div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
