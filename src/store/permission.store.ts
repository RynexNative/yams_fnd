import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * 🔐 Permission list (contract ya app nzima)
 * Usitumie string ovyo ovyo sehemu nyingine
 */
export type Permission =
  | "VIEW_DASHBOARD"
  | "VIEW_STUDENTS"
  | "CREATE_STUDENT"
  | "EDIT_STUDENT"
  | "DELETE_STUDENT"
  | "VIEW_TEACHERS"
  | "MANAGE_USERS"
  | "VIEW_BILLING"
  | "MANAGE_SETTINGS";

/**
 * 📦 Permission store state
 */
interface PermissionState {
  permissions: Permission[];

  /** Weka permissions zote (hutumika baada ya login) */
  setPermissions: (permissions: Permission[]) => void;

  /** Angalia kama user ana permission fulani */
  hasPermission: (permission: Permission) => boolean;

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
