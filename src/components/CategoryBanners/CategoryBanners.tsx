import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  name: string;
  image: string;
  slug :string
}

export default function CategoryBanner({ name, image ,slug }: BannerProps) {
  return (
    <div className="bg-[#16A34A] py-12 px-8 mb-10">
      <div className="container mx-auto">
        <nav className="flex items-center gap-2 text-green-50 text-sm mb-6 opacity-90">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:underline">Categories</Link>
          <span>/</span>
          <span className="font-semibold">{slug}</span>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm p-1 border border-white/30">
            <Image 
            fill
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2 tracking-tight">{name}</h1>
            <p className="text-green-50/80">Choose a subcategory to browse products</p>
          </div>
        </div>
      </div>
    </div>
  );
}