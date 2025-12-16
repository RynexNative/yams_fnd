import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface User {
  id: string;
  name: string;
  email: string;
  // permission: [];
  // any other fields
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: ({ user, token }) =>
        set({
          user,
          token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "yams-auth", // localStorage key
    }
  )
);
