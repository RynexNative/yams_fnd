// src/api/auth/auth.service.ts
import { restClient } from "../clients/rest.client";
import { graphqlClient } from "../clients/graphql.client";
import { LoginRequestDTO, LoginResponseDTO } from "@/dto/auth.dto";
import { TokenLoginResponse } from "@/dto/auth.dto";
import { API_CONFIG } from "@/api/config";

export const AuthService = {
  loginWithOAuth2: async (email: string, password: string) => {
    const body = new URLSearchParams();
    body.append("grant_type", "password");
    body.append("username", email);
    body.append("password", password);
    body.append("client_id", API_CONFIG.CLIENT_ID);
    body.append("client_secret", API_CONFIG.CLIENT_SECRET);

    const { data } = await restClient.post<TokenLoginResponse>(
      `${API_CONFIG.REST_BASE_URL}/token/`,
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return data;
  },


  // GraphQL login
  loginGraphQL: async (payload: LoginRequestDTO): Promise<LoginResponseDTO> => {
    const mutation = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          user {
            id
            name
            email
          }
        }
      }
    `;

    const res = await graphqlClient.request<{ login: LoginResponseDTO }>(
      mutation,
      payload
    );

    return res.login;
  },
};
