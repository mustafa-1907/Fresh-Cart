import Productcard from "@/components/Productcard/Productcard";
import { getAllProducts } from "../home.services";
import Link from "next/link";
import { Box, ChevronRight } from "lucide-react";

export default async function page() {
  const productList = await getAllProducts();

  return (
    <>
      <div className="w-full bg-[#16A34A] py-12 px-4 md:px-8 mb-10">
        <div className="container mx-auto">
          {/* 1. Breadcrumbs (الروابط اللي فوق) */}
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">All Products</span>
          </nav>

          {/* 2. Content Section */}
          <div className="flex items-center gap-5">
            {/* الـ Icon اللي في المربع الفاتح */}
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex justify-center items-center backdrop-blur-sm border border-white/10">
              <Box className="text-white w-9 h-9" />
            </div>

            {/* العناوين */}
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-4xl font-black tracking-tight">
                All Products
              </h1>
              <p className="text-white/90 text-[17px] font-medium">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-3 py-4 px-4">
        {productList.map((product) => (
          <Productcard key={product._id} prod={product} />
        ))}
      </div>
    </>
  );
}
