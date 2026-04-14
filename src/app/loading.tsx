import { ShoppingCart } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm animate-bounce">
            <ShoppingCart className="w-10 h-10 text-[#00b853]" />
          </div>
          
          <div className="absolute -inset-2 border-4 border-transparent border-t-[#00b853] rounded-full animate-spin opacity-20"></div>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-1 justify-center">
            Fresh<span className="text-[#00b853]">Cart</span>
          </h2>
          
          <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-[#00b853] rounded-full animate-progress-loading"></div>
          </div>
          
          <p className="text-gray-400 text-sm font-medium animate-pulse">
            Gathering fresh products for you...
          </p>
        </div>
      </div>


    </div>
  );
}