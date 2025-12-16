import React, { useState } from "react";

interface MenuItem {
  name: string;
  icon: string;
  subMenu?: MenuItem[]; // Optional submenu
}

const menu: MenuItem[] = [
  { name: "Dashboard", icon: "📊" },
  {
    name: "Students",
    icon: "👨‍🎓",
    subMenu: [
      { name: "All Students", icon: "👥" },
      { name: "Add Student", icon: "➕" },
    ],
  },
  {
    name: "Notes",
    icon: "📝",
    subMenu: [
      { name: "All Notes", icon: "📄" },
      { name: "Add Note", icon: "➕" },
    ],
  },
  { name: "Teachers", icon: "👩‍🏫" },
  { name: "Parents", icon: "👨‍👩‍👦" },
  { name: "Billing", icon: "💳" },
  { name: "Settings", icon: "⚙️" },
];

function SideBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-[rgb(var(--sidebar-bg-color))] shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-brand-primary">YAMS</div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1 px-2 mt-4">
        {menu.map((item) => (
          <div key={item.name} className="flex flex-col">
            <button
              onClick={() =>
                item.subMenu ? toggleDropdown(item.name) : undefined
              }
              className="flex items-center justify-between gap-3 px-3 py-2 text-[rgb(var(--text))] 
              hover:text-[rgb(var(--sidebar-text-color))] hover:bg-[rgb(var(--brand-primary))] dark:hover:bg-blue-700 transition rounded-full"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.subMenu && (
                <span className="text-sm">{openDropdown === item.name ? "▲" : "▼"}</span>
              )}
            </button>

            {/* Dropdown submenu */}
            {item.subMenu && openDropdown === item.name && (
              <div className="flex flex-col ml-8 mt-1 gap-1">
                {item.subMenu.map((sub) => (
                  <button
                    key={sub.name}
                    className="flex items-center gap-2 px-3 py-1 text-[rgb(var(--text))] hover:text-[rgb(var(--sidebar-text-color))] hover:bg-[rgb(var(--brand-primary))] dark:hover:bg-blue-700 transition rounded"
                  >
                    <span className="text-sm">{sub.icon}</span>
                    <span className="text-sm">{sub.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
