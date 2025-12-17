// src/api/clients/rest.client.ts
import axios from "axios";
import { API_CONFIG } from "../config";
import { useAuthStore } from "@/store";

export const restClient = axios.create({
  baseURL: API_CONFIG.REST_BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json"
    }
});

// 🔐 Request interceptor (attach token)
restClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ❌ Response interceptor (global error handling)
restClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);
