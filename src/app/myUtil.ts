import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken(){
    const cookie = await cookies()
    const sessionTkn =  cookie.get('next-auth.session-token')?.value;

    const jwtTkn =await decode({token:sessionTkn,secret:process.env.NEXTAUTH_SECRET !})
    console.log("token getUserToken() : ",jwtTkn);
    return (jwtTkn?.CredentialToken)   
}