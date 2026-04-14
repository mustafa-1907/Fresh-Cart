"use client";
import { MoveLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useContext, useState } from 'react'; 
import { clearAllCartItems } from '../AddToCart/AddToCart.action';
import { CartContext } from '@/context/CartContext/CartContext'; 

export default function DeleteCart() {
  const { setCartCount } = useContext(CartContext); 
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleClearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
      setIsDeleting(true);
      try {
        await clearAllCartItems();
        setCartCount(0); 
      } catch (error) {
        console.error("Failed to clear cart:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-100">
      
      <Link 
        href="/products" 
        className="flex items-center gap-2 text-[#16A34A] font-semibold hover:gap-3 transition-all duration-300"
      >
        <MoveLeft size={20} />
        <span>Continue Shopping</span>
      </Link>

      <button
        onClick={handleClearCart}
        disabled={isDeleting}
        className={`flex items-center gap-2 transition-colors duration-300 group ${
          isDeleting ? "text-gray-300 cursor-not-allowed" : "text-gray-400 hover:text-red-500"
        }`}
      >
        <Trash2 
          size={18} 
          className={isDeleting ? "" : "group-hover:animate-bounce"} 
        />
        <span className="text-[15px] font-medium">
          {isDeleting ? "Clearing..." : "Clear all items"}
        </span>
      </button>

    </div>
  );
}