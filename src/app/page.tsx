// import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
import { getAllCategories, getAllProducts } from "./home.services"; // تأكد من المسار
import Homebanners from "@/components/HomeBanners/HomeBanners";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";
import Productcard from "@/components/Productcard/Productcard";
import img1 from "@images/home-slider-1-d79601a8.png";
import img2 from "@images/home-slider-1-d79601a8.png";
import img3 from "@images/home-slider-1-d79601a8.png";
import Slider from "@/components/Slider/Slider";
import { getUserToken } from "./myUtil";
import CagtegoryCpt from "@/components/CategoryCpt/CagtegoryCpt";

const sliderData = [
  {
    src: img1.src,
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
    primaryBtn: { text: "Shop Now", url: "/shop" },
    secondaryBtn: { text: "View Categories", url: "/categories" },
  },
  {
    src: img2.src,
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    primaryBtn: { text: "Order Now", url: "/orders" },
    secondaryBtn: { text: "Delivery Info", url: "/info" },
  },
  {
    src: img3.src,
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
    primaryBtn: { text: "Shop Now", url: "/shop" },
    secondaryBtn: { text: "Learn More", url: "/about" },
  },
];

export default async function CategorySection() {
  getUserToken();

  const categoryList = await getAllCategories();
  const productList = await getAllProducts();
  
  return (
    <section className="container mx-auto ">
      <Slider data={sliderData} /> 
      <div className="flex items-center justify-between mb-10 py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-10 bg-[#008a4e] rounded-full" />
          <h2 className="text-3xl font-bold text-[#001f3f]">
            Shop By Category
          </h2>
        </div>
        <Link
          href="/"
          className="text-slate-600 font-bold flex items-center gap-1 hover:text-[#008a4e]"
        >
          View All Categories <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 py-4 px-4">
        {categoryList.map((category) => (
          <CagtegoryCpt key={category._id} cat={category} />
        ))}
      </div>
      <Homebanners />
      <div className="flex items-center justify-between mb-10 py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-10 bg-[#008a4e] rounded-full" />
          <h2 className="text-3xl capitalize font-bold text-[#001f3f]">
            Featured <span className="text-green-600"> products</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4 px-4">
        {productList.map((product) => (
          <Productcard key={product._id} prod={product} />
        ))}
      </div>
      <NewsletterSection />
    </section>
  );
}
