import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  PERMISSIONS,
  PermissionKey,
  PermissionCode,
} from "@/dto/permission.contract";

interface PermissionState {
  permissions: PermissionCode[];

  setPermissionsFromBackend: (permissions: string[]) => void;
  can: (permission: PermissionKey) => boolean;
  clearPermissions: () => void;
}

export const usePermissionStore = create<PermissionState>()(
  persist(
    (set, get) => ({
      // 👉 tunaanza na empty array (hakuna false)
      permissions: [],

      /**
       * Backend → ["can_view_dashboard", ...]
       * Store   → ["CAN_VIEW_DASHBOARD", ...]
       */
      setPermissionsFromBackend: (backendPermissions) => {
        const mapped: PermissionCode[] = [];

        backendPermissions.forEach((code) => {
          const upperCode = code.toUpperCase();

          const exists = Object.values(PERMISSIONS).includes(
            upperCode as PermissionCode
          );

          if (exists) {
            mapped.push(upperCode as PermissionCode);
          }
        });

        set({ permissions: mapped });
      },

      /**
       * permissionKey → "CAN_VIEW_DASHBOARD"
       */
      can: (permission) => {
        return get().permissions.includes(permission);
      },

      clearPermissions: () => set({ permissions: [] }),
    }),
    {
      name: "yams-permissions",
    }
  )
);
