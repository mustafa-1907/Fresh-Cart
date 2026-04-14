
export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserDataLogin {
  name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  user: UserDataLogin;
  token: string;
}