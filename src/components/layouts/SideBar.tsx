import React, { useState } from "react";
import { Users, UserPlus, LayoutDashboard, Settings, File, ChevronRight } from "lucide-react"
import { menuItems, MenuItem } from "./MenuItems";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"



function isActive(pathname: string, href?: string) {
  if (!href) return false
  return pathname === href || pathname.startsWith(href + "/")
}


function MenuItemRenderer({ item }: { item: MenuItem }) {
  const { pathname } = useLocation()
  const active = isActive(pathname, item.href)

  // 👉 CASE 1: HAINA CHILDREN (NORMAL MENU)
  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={active}
        >
          <Link to={item.href!}>
            {item.icon}
            {item.label}
          </Link>

        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  const isChildActive = item.children.some((child) =>
    isActive(pathname, child.href)
  )

  // 👉 CASE 2: INA CHILDREN (COLLAPSIBLE)
  return (
    <SidebarMenuItem>
      <Collapsible defaultOpen={isChildActive}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton isActive={isChildActive}>
            <ChevronRight className="transition-transform" />
            {item.icon}
            {item.label}
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.map((child, index) => {
              const childActive = isActive(pathname, child.href)

              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    isActive={childActive}
                  >
                    <Link to={child.href!}>
                      {child.icon}
                      {child.label}
                    </Link>

                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

export function SideBar(props: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="font-bold text-2xl text-center pt-12 p-6">

        Yams
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <MenuItemRenderer key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}

export default SideBar;
