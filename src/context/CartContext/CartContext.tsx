"use client"

import React, { createContext, useState } from "react"

export const CartContext = createContext({cartCount : 0 ,setCartCount:function(numOfCartItems){}})
export default function CartContextProvider({children}:{children : React.ReactNode}) {
  const [cartCount , setCartCount] = useState<number>(0)
  return (
   <CartContext value={{cartCount , setCartCount}}>
    {children}
   </CartContext>
  )
}
