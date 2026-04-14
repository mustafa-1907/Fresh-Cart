import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <ShoppingCart className="w-12 h-12 text-gray-300" />
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        Looks like you havent added anything to your cart yet. Start exploring our products!
      </p>

      <Link href="/">
        <Link href="/" className="bg-[#00b853] hover:bg-[#008a4e] text-white px-8 py-6 rounded-xl text-lg flex items-center gap-2 transition-all active:scale-95">
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Link>

      <div className="mt-16 w-full max-w-md">
         <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Popular Categories</p>
         <div className="flex flex-wrap justify-center gap-2">
            {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
              <span key={cat} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100 hover:bg-gray-100 cursor-pointer">
                {cat}
              </span>
            ))}
         </div>
      </div>
    </div>
  );
}