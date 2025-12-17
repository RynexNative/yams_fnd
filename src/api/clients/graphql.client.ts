// src/api/clients/graphql.client.ts
import { GraphQLClient } from "graphql-request";
import { API_CONFIG } from "../config";
import { useAuthStore } from "@/store";

export const graphqlClient = new GraphQLClient(API_CONFIG.GRAPHQL_URL, {
  headers: () => {
    const token = useAuthStore.getState().token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
});
