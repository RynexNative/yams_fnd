// src/mocks/testAuth.ts
import { UserDTO } from "@/dto/user.dto";

export const testAuth = {
  user: {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    roles: ["teacher"],
  } as UserDTO,
  token: "mock-jwt-token-123456",
};
