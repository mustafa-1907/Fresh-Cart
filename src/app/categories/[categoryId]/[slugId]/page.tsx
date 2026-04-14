import { AllProductsData } from "@/app/home.interface";
import Productcard from "@/components/Productcard/Productcard";
import Link from "next/link";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ categoryId: string; subId: string }>;
}) {
  const { categoryId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?category=${categoryId}`,
  );
  const { data } = await res.json();
  console.log("data category mvs: ", data);
  console.log("data category ID mvs: ", categoryId);
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-[#00b853] text-white py-12 px-8 mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Products List</h1>
          <p className="opacity-90">Showing {data.length} products</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10">
          {data.length > 0 ? (
            data.map((product: AllProductsData) => (
              <Productcard key={product._id} prod={product} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                No Products Found
              </h2>
              <p className="text-gray-500 mb-8 max-w-md">
                No products match your current filters. Please try again or
                explore other categories.
              </p>

              <Link
                href="/shop"
                className="bg-[#16A34A] hover:bg-[#15803d] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-sm"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
