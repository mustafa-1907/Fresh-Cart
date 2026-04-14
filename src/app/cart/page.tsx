import {
  getUserCart,
} from "@/components/AddToCart/AddToCart.action";
import CartCardItem from "@/components/AddToCart/CartCardItem";
import React from "react";
import { Payment } from "@/components/Payment/Payment";
import Image from "next/image";
import cartLogo from "@images/cartLogo.svg";
import EmptyCart from "@/components/AddToCart/EmptyCartPage";
import { CartProductItem } from "./card.interface";
import DeleteCart from "@/components/DeleteCart/DeleteCart";
export default async function page() {
  const {  numOfCartItems, products, totalCartPrice } =
    await getUserCart();


  if (!products || products.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="container mx-auto p-8 ">
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex justify-start items-center gap-3">
          <div className="w-14 h-14 bg-[#16A34A] rounded-2xl  flex justify-center items-center relative">
            <Image src={cartLogo} width={37.5} height={30} alt="cart Logo" />
          </div>
          <div className="">
            <h1 className="text-3xl font-black ">Shopping Cart</h1>
          </div>
        </div>
        <div className="">
          <p className="text-gray-500 text-[18px] font-semibold">
            you have{" "}
            <span className="text-[#16A34A] me-2">{numOfCartItems} items</span>
            in your cart {totalCartPrice}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {products.map((item: CartProductItem) => (
            <CartCardItem key={item._id} item={item} />
          ))}
          <DeleteCart />
        </div>

        <div className="">
          <Payment totalCartPrice={totalCartPrice} numOfCartItems={numOfCartItems}/>
        </div>
      </div>
    </div>
  );
}
