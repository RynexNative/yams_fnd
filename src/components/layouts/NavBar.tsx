import * as React from "react";
import SearchBar from "./SearchBar";
import { useSidebar } from "../ui/sidebar";

interface NavbarProps {
  title: string;
  children: any;
}

function NavBar({ title, children }: NavbarProps) {
  const { open, isMobile, openMobile } = useSidebar()
  if (isMobile) {
      console.log(`Hii ni mobile ndani` + openMobile)
      return (
        <header className="fixed top-0 right-0 h-16 bg-[rgb(var(--bg))] dark:border-gray-700 flex items-center px-6 gap-6 w-full z-4">
          {children}
          {/* Page title */}
          <h1 className="text-xl font-semibold text-[rgb(var(--text))]">{title}</h1>

          {/* Search bar */}
          {/* <SearchBar /> */}

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:opacity-75 transition">🔔</button>
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
        </header>
      );

  }
  if (open) {
    return (
      <header className="fixed top-0 left-64 right-0 h-16 bg-[rgb(var(--bg))] dark:border-gray-700 flex items-center px-6 gap-6  transition delay-150 duration-300 ease-in-out" style={{
      }}>
        {children}
        {/* Page title */}
        <h1 className="text-xl font-semibold text-[rgb(var(--text))]">{title}</h1>

        {/* Search bar */}
        <SearchBar />

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:opacity-75 transition">🔔</button>
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </header>
    );}
    

    

  console.log(`hii ni open ` + open + openMobile)
  return (
    <header className="fixed top-0 right-0 h-16 bg-[rgb(var(--bg))] dark:border-gray-700 flex items-center px-6 gap-6 w-full">
      {children}
      {/* Page title */}
      <h1 className="text-xl font-semibold text-[rgb(var(--text))]">{title}</h1>

      {/* Search bar */}
      <SearchBar />

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <button className="text-2xl hover:opacity-75 transition">🔔</button>
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
    </header>
  );
};

export default NavBar;
