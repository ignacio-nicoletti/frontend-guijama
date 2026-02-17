import React from "react";
import { AppSideBar } from "../sidebar/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`my-4 antialiased`}>
      <SidebarProvider>
        <AppSideBar />
        <div className="flex flex-1 flex-col">{children} </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
