import React from "react";
import SearchBar from "./SearchBar";

interface NavbarProps {
  title: string;
}

function NavBar({ title }: NavbarProps){
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-[rgb(var(--bg))] dark:border-gray-700 flex items-center px-6 gap-6">
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
