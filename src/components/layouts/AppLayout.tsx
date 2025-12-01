import React, { ReactNode } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

interface AppLayoutProps {
  title: string;
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">
      <SideBar />
      <NavBar title={title} />

      {/* Main content area */}
      <main className="pt-20 ml-64 p-6 text-[rgb(var(--text))]">{children}</main>
    </div>
  );
};

export default AppLayout;
