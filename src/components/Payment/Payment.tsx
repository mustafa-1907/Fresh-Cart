import Link from "next/link";

export function Payment({numOfCartItems , totalCartPrice}:{numOfCartItems:number,totalCartPrice:number}) {

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-fit sticky top-24">
      {/* Header */}
      <div className="bg-[#00b853] p-6 text-white ">
        <h2 className=" font-bold flex items-center  gap-2 text-2xl">
           Order Summary
        </h2>
        <p className="text-white text-lg mt-1">{numOfCartItems} items in your cart</p>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {/* Free Shipping Badge */}
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">🚚</div>
          <div>
            <p className="text-sm font-bold text-green-700">Free Shipping!</p>
            <p className="text-[11px] text-green-600">You qualify for free delivery</p>
          </div>
        </div>

        {/* Pricing Rows */}
        <div className="space-y-3 py-4 border-b border-dashed">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold text-slate-900">{totalCartPrice} EGP</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-green-600 font-bold">FREE</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center py-2">
          <span className="text-lg font-bold">Total</span>
          <span className="text-2xl font-black text-slate-900">{totalCartPrice} EGP</span>
        </div>




        {/* Checkout Button */}
        <Link href="/checkout" className="w-full py-4 bg-[#00b853] hover:bg-[#008a4e] text-white rounded-2xl font-bold shadow-lg shadow-green-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
           Secure Checkout
        </Link >

        <div className="flex items-center justify-center gap-4 mt-2">
           <span className="text-[10px] text-gray-400 flex items-center gap-1">🛡 Secure Payment</span>
           <span className="text-[10px] text-gray-400 flex items-center gap-1">⚡ Fast Delivery</span>
        </div>
      </div>
    </div>
  );
}