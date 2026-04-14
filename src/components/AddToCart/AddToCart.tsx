"use client";

import { Plus } from "lucide-react";
import AppButton from "../shared/AppButton/AppButton";
import { handleAddToCart } from "./AddToCart.action";
import { toast } from "sonner";
import { CartContext } from "@/context/CartContext/CartContext";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddToCart({id} :{id : string}) {

  const {setCartCount} = useContext(CartContext)
  const { data } = useSession();
const router = useRouter();
   async function handleAdd(e: React.MouseEvent){
    if (!data?.user) {
      router.push('/login');
      return;
    }
    e.preventDefault(); 
    e.stopPropagation(); 
    
    toast.promise(handleAddToCart({productId : id}),{
        loading : "Adding to Cart....",
        success : function({message,numOfCartItems}){
            setCartCount(numOfCartItems)
            return message
        },
        error : function({message}){
            return message
        },
        position : "top-center",
    })
  };

  return (
    <AppButton
      onClick={handleAdd} 
      variant="link"
      className="w-12 h-12 rounded-2xl bg-[#00b853] hover:bg-[#008a4e] text-white shadow-sm transition-all active:scale-90 cursor-pointer"
    >
      <Plus className="w-6 h-6 stroke-[3px]" />
    </AppButton>
  );
}