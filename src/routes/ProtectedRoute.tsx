import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "@/store/auth.store";
import { usePermissionStore } from "@/store/permission.store";
import { AccountType } from "@/dto/enums";
import { PermissionKey } from "@/dto/permission.contract";

interface ProtectedRouteProps {
  children: ReactNode;
  permission?: PermissionKey;
  allowedAccountTypes?: AccountType[];
}

export default function ProtectedRoute({
  children,
  permission,
  allowedAccountTypes,
}: ProtectedRouteProps) {
  const location = useLocation();
  const user = useAuthStore((s) => s.user);
  const accountType = useAuthStore((s) => s.account_type);
  const can = usePermissionStore((s) => s.can);

  /**
   * 1️⃣ NOT LOGGED IN
   */
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  /**
   * 2️⃣ ACCOUNT TYPE NOT ALLOWED
   */
  if (
    allowedAccountTypes &&
    !allowedAccountTypes.includes(accountType as AccountType)
  ) {
    return <Navigate to="/404" replace />;
  }

  /**
   * 3️⃣ PERMISSION CHECK
   */
  if (permission && !can(permission)) {
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
}
