"use client";
import { Loader2, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { CartProductItem } from "@/app/cart/card.interface";
import { useContext, useState } from "react";
import {

  deleteItem,
  updateCartCount,
} from "./AddToCart.action";
import { CartContext } from "@/context/CartContext/CartContext";

export default function CartCardItem({ item }: { item: CartProductItem }) {
  const { count, product, price } = item;
  const { setCartCount } = useContext(CartContext);

  const productId = product._id; 

  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdateQuantity(newCount: number) {
    if (newCount < 1) return;

    setIsLoading(true);

    const data = { count: newCount };
    const res = await updateCartCount(productId, data);

    if (res && res.status === "success") {
      setCartCount(res.numOfCartItems);
    }

    setIsLoading(false);
  }

  async function handleDeleteItem(productId: string) {
    setIsLoading(true);

    const res = await deleteItem(productId);

    if (res && res.status === "success") {
      setCartCount(res.numOfCartItems || 0);
    }

    setIsLoading(false);
  }

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-300 
      ${isLoading ? "opacity-60 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-3 shrink-0">
        <div className="relative w-32 h-32 bg-[#f8f9fa] rounded-2xl overflow-hidden p-3 border border-gray-50">
          <Image
            src={product.imageCover}
            alt={product?.title || "product"}
            fill
            className="object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 w-full text-center md:text-left">
        <h3 className="text-[18px] font-semibold text-[#101828] leading-tight line-clamp-1">
          {product?.title}
        </h3>
        <div className=" bg-green-100 w-fit rounded-xl">
          <p className="text-[11px] px-2 py-1 text-green-800">{product?.category.name}</p>
        </div>

        <div className="mt-2">
          <span className="text-[18px] font-bold text-[#16A34A]">
            {price} EGP <span className="text-gray-500 text-xs font-medium">per unit</span>
          </span>
        </div>

        <div className="flex items-center bg-[#f8f9fa] border border-gray-100 rounded-[14px] p-1.5 w-fit mx-auto md:mx-0 mt-3 shadow-inner">
          <button
            onClick={() => handleUpdateQuantity(count - 1)} 
            disabled={count <= 1 || isLoading}
            className="p-1 hover:bg-gray-200 rounded-md transition-colors disabled:opacity-30"
          >
            <Minus size={18} />
          </button>

          <span className="w-14 text-center font-black text-[18px] text-[#001f3f]">
            {isLoading ? "..." : count}
          </span>

          <button
            onClick={() => handleUpdateQuantity(count + 1)} 
            disabled={isLoading}
            className="p-1 hover:bg-gray-200 rounded-md transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center md:items-end gap-5 shrink-0 self-center md:self-end mt-4 md:mt-0">
        <div className="text-right">
          <p className="text-[12px] uppercase tracking-widest text-[#99A1AF] font-medium mb-1">
            Total
          </p>
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-[26px] font-bold text-[#101828]">
              {price * count}
            </span>
            <span className="text-sm font-medium text-gray-400">EGP</span>
          </div>
        </div>
        <button
          onClick={() => handleDeleteItem(productId)} 
          className="group flex items-center justify-center w-12 h-12 bg-red-50 hover:bg-red-100 border border-red-100 rounded-2xl transition-all duration-300 disabled:opacity-50"
          title="Remove item"
        >
          <Trash2
            size={20}
            className="text-red-500 group-hover:scale-110 transition-transform duration-300"
          />
        </button>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] rounded-[2rem] z-10 flex items-center justify-center">
          <Loader2 className="animate-spin text-[#00b853] w-8 h-8" />
        </div>
      )}
    </div>
  );
}
