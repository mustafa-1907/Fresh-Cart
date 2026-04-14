import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/app/home.interface';

export default function CategoryCpt({ cat }: { cat: Category }) {
  const { _id, name, image } = cat;

  return (
    <Link href={`/categories/${_id}`} className="block">
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 h-full">
        
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
          <Image 
          fill
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <h3 className="text-[#213a58] text-lg font-medium text-center">
          {name}
        </h3>
        
      </div>
    </Link>
  )
}