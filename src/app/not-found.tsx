"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, ShoppingCart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-gray-50 rounded-3xl flex items-center justify-center shadow-sm border border-gray-100 relative">
          <ShoppingCart className="w-16 h-16 text-[#00b853] opacity-80" />
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00b853] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-4 border-white">
            404
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          <div className="w-4 h-1.5 rounded-full bg-[#00b853]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
        </div>
      </div>

      <h1 className="text-4xl font-black text-slate-900 mb-3">
        Oops! Nothing Here
      </h1>
      <p className="text-gray-500 max-w-md leading-relaxed mb-8">
        Looks like this page went out of stock! Dont worry, theres plenty more fresh content to explore.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/">
          <Button className="h-12 px-8 bg-[#00b853] hover:bg-[#008a4e] text-white rounded-xl gap-2 font-bold transition-all shadow-md shadow-green-100">
            <Home className="w-5 h-5" /> Go to Homepage
          </Button>
        </Link>
        <Button 
          variant="outline" 
          className="h-12 px-8 border-gray-200 text-gray-600 rounded-xl gap-2 font-bold hover:bg-gray-50"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" /> Go Back
        </Button>
      </div>

      <div className="w-full max-w-2xl p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">
          Popular Destinations
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "All Products", href: "/shop" },
            { name: "Categories", href: "/categories" },
            { name: "Brands", href: "/brands" },
          ].map((dest) => (
            <Link key={dest.name} href={dest.href}>
              <span className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:text-[#00b853] hover:border-[#00b853] transition-all cursor-pointer shadow-sm block">
                {dest.name}
              </span>
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
}