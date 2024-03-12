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