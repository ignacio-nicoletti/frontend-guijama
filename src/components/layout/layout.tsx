import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-1 flex-col py-4 px-4">{children}</div>;
};

export default Layout;
