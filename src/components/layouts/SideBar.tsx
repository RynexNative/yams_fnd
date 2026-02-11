import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { MENU_ITEMS, MenuCategory } from "./MenuItems";
import { MenuItemRenderer } from "@/components/layouts/MenuItemRender";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function MenuSection({
  title,
  category,
}: {
  title: string;
  category: MenuCategory;
}) {
  const items = MENU_ITEMS.filter((i) => i.category === category);
  if (!items.length) return null;

  return (
    <>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, i) => (
            <MenuItemRenderer key={i} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </>
  );
}

export function SideBar(props: React.ComponentProps<typeof Sidebar>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/t/dashboard" className="block p-4 font-bold text-xl">
          YAMS
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <MenuSection title="Personal" category="PERSONAL" />
          <MenuSection title="School" category="SCHOOL" />
          <MenuSection title="Administration" category="ADMIN" />
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />

      <div className="p-4 border-t space-y-2">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="w-full justify-start gap-2"
        >
          {theme === "light" ? <Moon /> : <Sun />}
          {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>
    </Sidebar>
  );
}

export default SideBar