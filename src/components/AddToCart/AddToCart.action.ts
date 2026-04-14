"use server"

import { ProductQuantity } from "@/app/cart/card.interface";
import { getUserToken } from "@/app/myUtil";
import { revalidatePath } from "next/cache";

export async function handleAddToCart(data: {productId : string}) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
        method: "POST",
        headers: {
            token: (await getUserToken() as string),
             "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const {status,message,numOfCartItems,  cartId, data:cartData} = await response.json();

    revalidatePath('/cart')
    return {status,message,numOfCartItems,  cartId, data:cartData}  
}

export async function getUserCart() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
        method: "GET",
        headers: {
            token: (await getUserToken() as string),
        },
        cache : "force-cache",
        next :{
        }
    });

const result = await response.json();

    if (!response.ok || !result.data) {
        return { cartId: null, numOfCartItems: 0, products: [], totalCartPrice: 0 };
    }

    
    const { cartId, numOfCartItems, data: { products, totalCartPrice } } = result;
    return { cartId, numOfCartItems, products, totalCartPrice };
}


export async function updateCartCount(productId: string, data: ProductQuantity) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}`, {
        method: "PUT",
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    const result = await response.json();
    revalidatePath('/cart'); 
    
    return result;
}

export async function deleteItem(productId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/${productId}`, {
        method: "DELETE",
        headers: {
            token: (await getUserToken() as string),
        }
    });

    const result = await response.json();
    revalidatePath('/cart');
    return result; 
}

export async function clearAllCartItems() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
        method: "DELETE",
        headers: {
            token: (await getUserToken() as string),
        }
    });
    const data = response.json()
    revalidatePath('/cart');
    return data
}
