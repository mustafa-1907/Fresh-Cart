"use server"

import { cookies } from "next/headers";
import { RegisterResponse, UserDataType } from "./register";

export async function handleUserRegister(userData : UserDataType): Promise<string | boolean>{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const data : RegisterResponse = await response.json();

const cookie = await cookies()
cookie.set("tkn", data.token,{
  httpOnly: true,
  sameSite : "strict",
  maxAge: 60 * 60 * 24 * 3, 
})


console.log(cookie.get("tkn")?.value);
if(data.message ==="success"){
  return true
}
    return data.message
}