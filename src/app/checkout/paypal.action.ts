"use server"

import { getUserToken } from "../myUtil";
import { ShippingAddressType } from "./checkout.inerface";

export async function handleCashOrder(shippingAddress : ShippingAddressType , cartId : string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/orders/${cartId}`,{
        method:"POST",
        headers: {
            token: (await getUserToken() as string),
             "Content-Type": "application/json"
        },
        body:JSON.stringify(shippingAddress)
    })
    const data = await response.json()
    return data
    
}