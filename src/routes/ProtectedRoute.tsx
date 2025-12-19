import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import { usePermissionStore } from "../store/permission.store";
import { PermissionDTO } from "@/dto/permission.dto";

interface ProtectedRouteProps {
  children: React.ReactNode;
  permission?: PermissionDTO;
}

export default function ProtectedRoute({
  children,
  permission,
}: ProtectedRouteProps) {
  const user = useAuthStore((s) => s.user);
  const hasPermission = usePermissionStore((s) => s.hasPermission);

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  if (permission && !hasPermission(permission)) {
    // Logged in but missing permission → 403 page
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
}
