import { create } from "zustand";
import { persist } from "zustand/middleware";
import {AuthState, LoginResponseDTO} from "@/dto/auth.dto"

export const useAuthStore = create<LoginResponseDTO>()(
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
