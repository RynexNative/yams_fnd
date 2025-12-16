// src/mocks/testAuth.ts
import { User } from "@/store/auth.store";

export const testAuth = {
  user: {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    roles: ["teacher"],
  } as User,
  token: "mock-jwt-token-123456",
};
