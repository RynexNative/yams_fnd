import { create } from "zustand";
import { persist } from "zustand/middleware";

import { PermissionDTO } from "@/dto/permission.dto";

/**
 * 🔐 Permission list (contract ya app nzima)
 * Usitumie string ovyo ovyo sehemu nyingine
 */

/**
 * 📦 Permission store state
 */
interface PermissionState {
  permissions: PermissionDTO[];

  /** Weka permissions zote (hutumika baada ya login) */
  setPermissions: (permissions: PermissionDTO[]) => void;

  /** Angalia kama user ana permission fulani */
  hasPermission: (permission: PermissionDTO) => boolean;

  /** Futa permissions zote (logout) */
  clearPermissions: () => void;
}

/**
 * 🏗️ Permission Store (Enterprise-ready)
 */
export const usePermissionStore = create<PermissionState>()(
  persist(
    (set, get) => ({
      permissions: [],

      setPermissions: (permissions) =>
        set({
          permissions,
        }),

      hasPermission: (permission) =>
        get().permissions.includes(permission),

      clearPermissions: () =>
        set({
          permissions: [],
        }),
    }),
    {
      name: "yams-permissions", // localStorage key
    }
  )
);
