import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="bg-(--color-primary) min-h-screen flex items-center justify-center p-4 overflow-hidden scroll-hidden">
      {children}
      <img
        src="/LogoTrustFundIcon.svg"
        alt="logoTrust"
        className="absolute right-0 bottom-0 !h-1/2 -z-0"
      />
    </section>
  );
};

export default Layout;
