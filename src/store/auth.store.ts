import { create } from "zustand";
import { persist } from "zustand/middleware";
import {AuthState, LoginResponseDTO} from "@/dto/auth.dto"
import { setGraphqlToken } from "@/api/clients/graphql.client";

export const useAuthStore = create<LoginResponseDTO>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: ({ user, token }) =>{
        set({user,token,}),
        setGraphqlToken(token);
      },
      logout: () =>{
        set({user: null,token: null,}),
        setGraphqlToken(undefined);
      }
    }),
    {
      name: "yams-auth", // localStorage key
      onRehydrateStorage: () => (state) => {
        // Hii inaitwa baada store ihydrate kutoka localStorage
        if (state?.token) {
          setGraphqlToken(state.token);
        }
      }
    }
  )
);
