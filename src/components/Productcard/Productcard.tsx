import Image from "next/image";
import { Eye, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AllProductsData } from "@/app/home.interface";
import Link from "next/link";
import AddToCart from "../AddToCart/AddToCart";

export default function Productcard({ prod }: { prod: AllProductsData }) {
  const {
    imageCover,
    title,
    category,
    ratingsAverage,
    priceAfterDiscount,
    price,
    ratingsQuantity,
    _id
  } = prod; 
  return (

    <Link href={`/ProductDetails/${_id}`} className="">
        <Card className="group relative w-70 border h-120 border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden bg-white">
      <div className="relative aspect-square p-4 flex items-center justify-center overflow-hidden">
          <Image
            src={imageCover} 
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />


        <div className="absolute top-4 right-4 flex flex-col gap-2">

          <Button
            size="icon"
            variant="outline"
            className="cursor-pointer w-10 h-10 rounded-full border-gray-100 shadow-sm hover:bg-[#00b853] hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <CardContent className="p-5 pt-0 flex flex-col gap-2">
        <span className="text-xs text-gray-500 font-medium tracking-wide">
          {category.name}
        </span>

        <h3 className="text-[17px] font-bold text-[#001f3f] leading-tight hover:text-[#00b853] cursor-pointer transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= ratingsAverage
                    ? "fill-yellow-400 text-yellow-400" 
                    : "text-gray-300" 
                }`}
              />
            ))}
          </div>

          <span className="text-sm text-gray-500 font-medium ml-1">
            {ratingsAverage} ({ratingsQuantity})
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-black text-[#001f3f]">
            {priceAfterDiscount ? priceAfterDiscount : price}
            <span className="text-lg ml-1 font-bold">EGP</span>
          </span>

          {priceAfterDiscount && (
            <span className="text-gray-400 line-through text-sm font-medium">
              {price} EGP
            </span>
          )}

          <div className="">
            <AddToCart id={_id}/>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
}
