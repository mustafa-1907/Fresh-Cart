import { getAllCategories } from "../home.services";
import {  ChevronRight, Layers } from "lucide-react";
import Link from "next/link";
import CagtegoryCpt from "@/components/CategoryCpt/CagtegoryCpt";

export default async function page() {
  const categoryList = await getAllCategories();

  return (
    <>
      <div className="w-full bg-[#16A34A] py-12 px-4 md:px-8 mb-10">
        <div className="container mx-auto">
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Categories</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex justify-center items-center backdrop-blur-sm border border-white/10">
              <Layers className="text-white w-9 h-9" />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-white text-4xl font-black tracking-tight">
                All Categories
              </h1>
              <p className="text-white/90 text-[17px] font-medium">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 py-4 px-4">
        {categoryList.map((category) => (
          <CagtegoryCpt key={category._id} cat={category} />
        ))}
      </div>
    </>
  );
}
