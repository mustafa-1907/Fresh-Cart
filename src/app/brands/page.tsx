import Image from "next/image";
import Link from "next/link";
import { BrandItem } from "./[brandId]/specificBrand.interface";

export default async function BrandsPage() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands",{
    cache :"force-cache"
  });
  const { data } = await res.json();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-[#8B5CF6] text-white py-12 px-8 mb-10 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-black mb-2">Top Brands</h1>
          <p className="opacity-90 font-medium">Shop from your favorite brands</p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.map((brand: BrandItem) => (
            <Link 
              href={`/brands/${brand._id}?name=${brand.name}`} 
              key={brand._id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <div className="relative w-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="font-bold text-[#001f3f] group-hover:text-[#8B5CF6] transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}