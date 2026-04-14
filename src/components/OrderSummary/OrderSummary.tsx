
import { CartProductItem } from "@/app/cart/card.interface";
import { OrderSummartItem } from "../OrderSummartItem/OrderSummartItem";

export function OrderSummary({ cartData }: { cartData: any }){

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        
        <div className="bg-[#16A34A] p-4 text-white flex items-center gap-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 118 0m-4 7v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm5 2l10 10m0 0l10-10m-10 10V3" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">Order Summary</h3>
            <p className="text-xs text-green-100">{cartData.numOfCartItems} items</p>
          </div>
        </div>

        <div className="max-h-100 overflow-y-auto">
          {cartData.products.map((item: CartProductItem) => (
            <OrderSummartItem 
              key={item._id} 
              product={item.product} 
              count={item.count} 
              price={item.price} 
            />
          ))}
        </div>

        <div className="p-6 bg-gray-50/50 border-t border-gray-100 space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold">{cartData.totalCartPrice} EGP</span>
          </div>          
          <div className="flex justify-between items-center text-xl">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-black text-[#16A34A]">
              {cartData.totalCartPrice} <small className="text-xs">EGP</small>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};