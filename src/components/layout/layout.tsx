import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className=" min-h-screen flex  p-4 overflow-hidden scroll-hidden">{children}</section>
  );
};

export default Layout;
