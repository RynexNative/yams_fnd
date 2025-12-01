import React from "react";

interface MenuItem {
  name: string;
  icon: string; // Badilisha kuwa React component kama unataka icons halisi
}

const menu: MenuItem[] = [
  { name: "Dashboard", icon: "📊" },
  { name: "Students", icon: "👨‍🎓" },
  { name: "Teachers", icon: "👩‍🏫" },
  { name: "Parents", icon: "👨‍👩‍👦" },
  { name: "Billing", icon: "💳" },
  { name: "Settings", icon: "⚙️" },
];

const SideBar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[rgb(var(--card))] shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-brand-primary">YAMS</div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1 px-4 mt-4">
        {menu.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgb(var(--text))] hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
