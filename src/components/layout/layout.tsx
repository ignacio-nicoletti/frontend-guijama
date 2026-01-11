import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/admin/configuration" && <Navbar />}
      <section className=" min-h-screen flex  overflow-hidden min-w-full scroll-hidden">
        {children}
      </section>
    </>
  );
};

export default Layout;
