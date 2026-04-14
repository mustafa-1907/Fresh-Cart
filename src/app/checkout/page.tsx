import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Home,
  Receipt,
} from "lucide-react";
import CheckoutForm from "./CheckotForm";
import { getUserCart } from "@/components/AddToCart/AddToCart.action";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
export default async function CheckoutPage() {
  const cartData = await getUserCart();

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="mb-6 max-w-350 mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="max-w-350 mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-xl bg-[#16A34A] flex items-center justify-center shadow-lg shadow-green-100">
              <Receipt color="white" size="26" />
            </div>
            <h1 className="font-bold text-3xl text-slate-900 tracking-tight">
              Complete Your Order
            </h1>
          </div>
          <p className="text-slate-500 font-medium ml-1">
            Review your items and complete your purchase
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white shadow-sm border border-slate-100 overflow-hidden rounded-[2.5rem]">
              <div className="bg-[#16A34A] w-full p-8">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <Home color="white" size={24} strokeWidth={2.5} />
                    <h2 className="text-white font-bold text-2xl">
                      Shipping Address
                    </h2>
                  </div>
                  <p className="text-green-50/80 text-sm font-medium ml-9">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="bg-[#EFF6FF] p-5 rounded-[1.5rem] flex items-start gap-4 border border-[#DBEAFE]">
                  <div className="bg-[#3B82F6] text-white rounded-full p-1.5 flex items-center justify-center w-5 h-5 mt-0.5 shadow-sm">
                    <span className="text-[10px] font-black italic">i</span>
                  </div>
                  <div>
                    <p className="text-[#1E40AF] text-sm font-bold tracking-tight">
                      Delivery Information
                    </p>
                    <p className="text-[#1E40AF] text-xs font-medium opacity-80 mt-0.5 leading-relaxed">
                      Please ensure your address is accurate for smooth
                      delivery.
                    </p>
                  </div>
                </div>

                <div className="px-1">
                  <CheckoutForm cartId={cartData.cartId} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary cartData={cartData} />
          </div>
        </div>
      </div>
    </main>
  );
}
