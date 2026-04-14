// route handler

import { nextAuthConfig } from "@/nextauth/nextauth";
import NextAuth from "next-auth";

const myRouterHandlerObject = NextAuth(nextAuthConfig)

export {myRouterHandlerObject as GET , myRouterHandlerObject as POST}