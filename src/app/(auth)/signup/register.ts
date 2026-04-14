export interface UserDataType {
  name: string
  email: string
  password: string
  rePassword: string
  phone: string
}
export interface RegisterResponse {
  message: string
  user: UserData
  token: string
}

export interface UserData {
  name: string
  email: string
  role: string
}

