import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { MenuItem } from "./MenuItems";
import { isActive, useMenuAccess } from "@/lib/sidebarhelper";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function MenuItemRenderer({ item }: { item: MenuItem }) {
  const { pathname } = useLocation();
  const { canView, hasVisibleChildren } = useMenuAccess();

  if (!canView(item) && !hasVisibleChildren(item)) return null;

  const active = isActive(pathname, item.href);

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={active}>
          <Link to={item.href!} className="flex items-center gap-3">
            {item.icon}
            <span>{item.label}</span>
            {item.badge && <MenuBadge value={item.badge} />}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  const childActive = item.children.some((c) =>
    isActive(pathname, c.href)
  );

  return (
    <SidebarMenuItem>
      <Collapsible defaultOpen={childActive}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton isActive={childActive}>
            <ChevronRight
              className={cn(
                "transition-transform",
                childActive && "rotate-90"
              )}
            />
            {item.icon}
            <span>{item.label}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.filter(canView).map((child, i) => (
              <SidebarMenuItem key={i}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(pathname, child.href)}
                >
                  <Link to={child.href!} className="flex items-center gap-3">
                    {child.icon}
                    <span>{child.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function MenuBadge({ value }: { value: string | number }) {
  return (
    <Badge className="ml-auto text-xs h-5 px-2">
      {value}
    </Badge>
  );
}
