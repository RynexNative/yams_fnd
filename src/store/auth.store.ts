import { create } from "zustand";
import { persist } from "zustand/middleware";
import {AuthState} from "@/dto/auth.dto"
import { setGraphqlToken } from "@/api/clients/graphql.client";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      account_type: null,

      login: ({ user, token, account_type }) => {
        set({
          user,
          token,
          account_type: account_type,
        });

        setGraphqlToken(token);
      },

      logout: () => {
        set({
          user: null,
          token: null,
          account_type: null,
        });

        setGraphqlToken(undefined);
      },
    }),
    {
      name: "yams-auth",

      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          setGraphqlToken(state.token);
        }
      },
    }
  )
);

