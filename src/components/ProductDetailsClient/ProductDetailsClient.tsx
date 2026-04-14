"use client"; 

import { useState } from "react";
import Image from "next/image";
import {
  Star,

  ShoppingCart,
  Zap,

  ChevronRight,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AllProductsData } from "@/app/home.interface";
import Link from "next/link";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductDetailsClient({
  productDetails,
}: {
  productDetails: AllProductsData;
}) {
  const {
    imageCover,
    images,
    title,
    category,
    brand,
    price,
    priceAfterDiscount,
    description,
    ratingsAverage,
    ratingsQuantity,
    _id,
  } = productDetails;

  const [mainImage, setMainImage] = useState(imageCover);

  const [count] = useState(1);

 
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link href="/" className="hover:text-[#00b853] cursor-pointer">
          <Home className="w-4 h-4" />
        </Link>
        <ChevronRight className="w-4 h-4" />
        <Link
          href={`/${category?.name}`}
          className="hover:text-[#00b853] cursor-pointer"
        >
          {category?.name}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium line-clamp-1">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white aspect-4/5 relative shadow-sm">
            <Image
              src={mainImage} 
              alt={title}
              fill
              className="object-contain p-6 transition-all duration-500"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...images].map((img: string, i: number) => (
              <div
                key={i}
                onClick={() => setMainImage(img)} 
                className={`aspect-square border-2 rounded-lg overflow-hidden cursor-pointer transition-all relative ${
                  mainImage === img
                    ? "border-[#00b853] scale-95"
                    : "border-gray-100 hover:border-gray-300"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="flex gap-2">
            <Badge className="bg-[#f0fdf4] text-[#00b853] border-none">
              {category?.name}
            </Badge>
            {brand && <Badge variant="outline">{brand.name}</Badge>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s <= Math.round(ratingsAverage) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {ratingsAverage} ({ratingsQuantity} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-slate-900">
              {priceAfterDiscount ? priceAfterDiscount : price} EGP
            </span>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl flex justify-between items-center border border-gray-100">
            <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">
              Total Amount
            </span>
            <span className="text-2xl font-black text-[#00b853]">
              {(
                (priceAfterDiscount ? priceAfterDiscount : price) * count
              ).toFixed(2)}{" "}
              EGP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center justify-center h-16 bg-[#0f172a]  text-lg font-bold rounded-2xl gap-3  shadow-md">
              <div className="flex text-white gap-3">
              <ShoppingCart className="w-6 h-6" /> 
              <p>Add {count} to Cart</p>
              </div>
              <AddToCart id={_id} />
            </div>

            <Button className="h-16 bg-[#00b853] hover:bg-black text-lg font-bold rounded-2xl gap-3 transition-all active:scale-95 shadow-md">
              <Zap className="w-6 h-6 fill-white" /> Buy Now
            </Button>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-bold text-slate-800 mb-2 underline decoration-[#00b853] decoration-2 underline-offset-4">
              Product Info
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
