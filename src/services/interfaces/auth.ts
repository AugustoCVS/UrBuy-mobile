export interface RegisterRequest {
  name: string;
  email: string;
  cnpj: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  cnpj: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  cnpj: string;
}