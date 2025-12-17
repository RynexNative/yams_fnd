import { UserDTO } from "./user.dto";

export interface AuthState {
  user: UserDTO | null;
  token: string | null;
}

export interface TokenLoginResponse {
  access: string;
  refresh?: string;
  user: UserDTO;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  user: UserDTO | null;
  token: string | null;
  login : (data: {user: UserDTO, token: string}) => void;
  logout: () => void;
}