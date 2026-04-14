import Productcard from "@/components/Productcard/Productcard";
import Link from "next/link";
import { AllProductsData } from "@/app/home.interface";

export default async function BrandProductsPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ brandId: string }>,
  searchParams: Promise<{ name: string }>
}) {
  const { brandId } = await params;
  const { name } = await searchParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?brand=${brandId}`,{
    cache : "force-cache"
  });
  const { data } = await res.json();

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#00b853] text-white py-10 px-8 mb-10">
        <div className="container mx-auto flex items-center gap-4">
           <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
             <h1 className="text-3xl font-black">{name} Products</h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <span>Showing {data.length} products for {name}</span>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {data.map((product: AllProductsData) => (
              <Productcard key={product._id} prod={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            </div>
            <h2 className="text-xl font-bold">No Products Found for {name}</h2>
            <Link href="/brands" className="text-[#00b853] mt-4 underline">Back to all brands</Link>
          </div>
        )}
      </div>
    </main>
  );
}