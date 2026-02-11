import { MenuItem } from "@/components/layouts/MenuItems";
import { AccountType } from "@/dto/enums";
import { useAuthStore, usePermissionStore } from "@/store";

export function isActive(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export function useMenuAccess() {
  const accountType = useAuthStore((s) => s.account_type);
  const can = usePermissionStore((s) => s.can);

  const canView = (item: MenuItem) => {
    if (
      item.allowedAccountTypes &&
      !item.allowedAccountTypes.includes(accountType as AccountType)
    ) {
      return false;
    }

    if (item.permission && !can(item.permission)) {
      return false;
    }

    return true;
  };

  const hasVisibleChildren = (item: MenuItem) =>
    item.children?.some(canView) ?? false;

  return { canView, hasVisibleChildren };
}
