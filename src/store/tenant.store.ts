import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * 🏫 Tenant (School / Organization)
 */
export interface Tenant {
  id: string;
  name: string;
  code?: string;
}

/**
 * 📦 Tenant store state
 */
interface TenantState {
  tenants: Tenant[];
  activeTenant: Tenant | null;

  /** Weka tenants zote za user */
  setTenants: (tenants: Tenant[]) => void;

  /** Badilisha tenant inayotumika */
  setActiveTenant: (tenant: Tenant) => void;

  /** Futa taarifa zote (logout) */
  clearTenant: () => void;
}

/**
 * 🏗️ Tenant Store (Multi-tenant core)
 */
export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenants: [],
      activeTenant: null,

      setTenants: (tenants) =>
        set({
          tenants,
          activeTenant: tenants.length ? tenants[0] : null,
        }),

      setActiveTenant: (tenant) =>
        set({
          activeTenant: tenant,
        }),

      clearTenant: () =>
        set({
          tenants: [],
          activeTenant: null,
        }),
    }),
    {
      name: "yams-tenant",
    }
  )
);
