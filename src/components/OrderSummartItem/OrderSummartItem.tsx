import Image from "next/image";

// OrderItem.tsx
interface Product {
  imageCover: string;
  title: string;
}

interface OrderItemProps {
  product: Product;
  count: number;
  price: number;
}

export function OrderSummartItem({ product, count, price }: OrderItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-xl border border-gray-200 overflow-hidden bg-white p-1">
          <Image 
          fill
            src={product.imageCover} 
            alt={product.title} 
            className="w-full h-full object-contain" 
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">
            {product.title}
          </h4>
          <p className="text-gray-500 text-xs font-semibold">
            {count} × {price} EGP
          </p>
        </div>
      </div>
      <span className="font-bold text-gray-800 text-sm">
        {count * price}
      </span>
    </div>
  );
};