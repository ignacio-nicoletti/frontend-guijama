import React from "react";
import { Navbar } from "../navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className=" min-h-screen flex  overflow-hidden min-w-full scroll-hidden">
        {children}
      </section>
    </>
  );
};

export default Layout;
