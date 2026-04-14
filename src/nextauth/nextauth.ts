import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";

export interface DecodeTokenData {
    id: string
    name: string
    role: string
    iat: number
    exp: number
}

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: "login ",
            credentials: {
                email: {
                    placeholder: "email ...",
                    type: "email"
                },
                password: {
                    placeholder: "password...",
                    type: "password"
                },

            },
            authorize: async function (credentials) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                });

                const data = await response.json();
                const decodeTkn: DecodeTokenData = jwtDecode(data.token);
                console.log(decodeTkn);

                if (data.message === "success") {
                    return {
                        ...data.user,
                        userTkn: data.token,
                        id: decodeTkn.id
                    };
                }

                throw new Error(data.message || "Invalid email or password");
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        jwt({ user, token }) {
            if (user) {
                token.CredentialToken = (user as any).userTkn;
                 token.userID = user.id
            }
            return token
        },

      session(param) {
    if (param.session && param.session.user) {
        (param.session.user as any).id = param.token.userID as string;
    }
    
    return param.session;
}
    }


}
