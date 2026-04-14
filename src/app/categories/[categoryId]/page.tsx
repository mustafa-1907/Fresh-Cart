import { Subcategory } from "@/app/home.interface";
import CategoryBanner from "@/components/CategoryBanners/CategoryBanners";
import { Folder, MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default async function SubcategoriesPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  const categoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${categoryId}`,
    {
      cache: "force-cache",
    },
  );
  const categoryData = await categoryRes.json();
  const { name, image, slug } = categoryData.data;

  const subRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${categoryId}/subcategories`,
    {},
  );
  const subData = await subRes.json();
  const subcategories = subData.data;

  return (
    <main className="min-h-screen bg-gray-50">
      <CategoryBanner name={name} image={image} slug={slug} />

      <div className="container mx-auto px-6 py-8">
        <div className="mb-2">
          <Link href="/categories">
            <div className="flex gap-2 text-lg items-center text-gray-600 capitalize ">
              <MoveLeft />
              back to categories
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subcategories.map((sub: Subcategory) => (
            <Link
              href={`/categories/${categoryId}/${sub._id}`}
              key={sub._id}
              className="group"
            >
              <div
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm 
                  transition-all duration-300 ease-out 
                  group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-green-200/50
                  flex flex-col gap-3"
              >
                <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-green-100">
                  <Folder
                    size={28}
                    className="fill-green-600 text-green-600"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-bold text-slate-800 text-lg transition-colors group-hover:text-green-700">
                  {sub.name}
                </h3>

                <div className="flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-auto pt-2">
                  <p className="text-[12px] text-gray-400 font-medium">
                    Browse products
                  </p>
                  <MoveRight
                    size={16}
                    className="text-green-500 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
