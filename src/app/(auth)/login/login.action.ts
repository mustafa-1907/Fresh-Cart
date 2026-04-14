"use server"

import { cookies } from "next/headers";
import { LoginRequest } from "./login";



export async function sendUserLogin(userData: LoginRequest) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (data.message === "success") {
        const cookie = await cookies();
        cookie.set("token", data.token, {
            httpOnly: true,
            sameSite: "strict",
        });
        return true;
    }
    return new Error(data.message || "Login failed");
}