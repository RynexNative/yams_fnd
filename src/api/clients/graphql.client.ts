// src/api/clients/graphql.client.ts
import { GraphQLClient } from "graphql-request";
import { API_CONFIG } from "../config";

export const graphqlClient = new GraphQLClient(API_CONFIG.GRAPHQL_URL);

// Fungua function ya kusaidia set token
export const setGraphqlToken = (token?: string) => {
  if (token) {
    graphqlClient.setHeader("Authorization", `Bearer ${token}`);
  } else {
    graphqlClient.setHeaders({});
  }
};
