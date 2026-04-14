"use client"

import CartContextProvider from "@/context/CartContext/CartContext"
import { SessionProvider } from "next-auth/react"

export default function MySession({children}: {children : React.ReactElement}) {
  return (

    <CartContextProvider>

    <SessionProvider>
        {children}
    </SessionProvider>
    </CartContextProvider>
  )
}
