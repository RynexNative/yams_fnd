import { UserDTO } from "./user.dto";

export interface AuthState {
  user: UserDTO | null;
  token: string | null;
  account_type: UserDTO["account_type"] | null;

  login : (payload: LoginResponseDTO) => void;
  logout: () => void;
}

export interface TokenLoginResponse {
  access_token: string;
  refresh_token?: string;
  user: UserDTO;
}

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  user: UserDTO | null;
  token: string | null;
  account_type: string | null
}