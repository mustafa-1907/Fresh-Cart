"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "./checkou.schema";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { MapPin, Phone, Building, Hash } from "lucide-react"; 
import AppButton from "@/components/shared/AppButton/AppButton";
import { toast } from "sonner";
import {  ShippingAddressType, UserShippingAddress } from "./checkout.inerface";
import { handleCashOrder } from "./paypal.action";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext/CartContext";
import { useContext } from "react";

export default function CheckoutForm({cartId}:{cartId:string}) {
  const { setCartCount } = useContext(CartContext); 

    const router = useRouter()
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      city: "",
      details: "",
      phone: "",
      postalCode: "",
    },
  });

   async function onSubmitCash(data: UserShippingAddress)  {
    const shippingAddress :ShippingAddressType = {shippingAddress : data}
    toast.promise(handleCashOrder(shippingAddress,cartId),{
        loading: "creating cash order please wait....",
        success:()=>{
            router.push("/")
            setCartCount(0);
            return "order Created"
            
        },
        error:()=>{
           return "order Cancled Try Again Later"
        },
        position :"top-center"
    })
  };    





  return (
    <form  className="max-w-4xl mx-auto p-4">
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-slate-700 font-bold mb-2 block text-sm">
                    City <span className="text-red-500">*</span>
                  </FieldLabel>
                  <div className="relative">
                    <Building
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <Input
                      {...field}
                      className="pl-12 h-14 bg-slate-50 border-slate-100 rounded-2xl"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError>{fieldState.error?.message}</FieldError>
                  )}
                </Field>
              )}
            />

            <Controller
              name="postalCode"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-slate-700 font-bold mb-2 block text-sm">
                    Postal Code <span className="text-red-500">*</span>
                  </FieldLabel>
                  <div className="relative">
                    <Hash
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <Input
                      {...field}
                      placeholder="12345"
                      className="pl-12 h-14 bg-slate-50 border-slate-100 rounded-2xl"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError>{fieldState.error?.message}</FieldError>
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="details"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-slate-700 font-bold mb-2 block text-sm">
                  Street Details <span className="text-red-500">*</span>
                </FieldLabel>
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-4 text-slate-400"
                    size={18}
                  />
                  <textarea
                    {...field}
                    className="w-full min-h-25 pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white transition-all outline-none text-sm"
                    placeholder="Street name, building, floor..."
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError>{fieldState.error?.message}</FieldError>
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-slate-700 font-bold mb-2 block text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </FieldLabel>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <Input
                    {...field}
                    className="pl-12 h-14 bg-slate-50 border-slate-100 rounded-2xl"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError>{fieldState.error?.message}</FieldError>
                )}
              </Field>
            )}
          />

          <div className="flex flex-row gap-4 w-full mt-6">
            <AppButton
            onClick={handleSubmit(onSubmitCash)}
              type="button"
              className="flex-1 bg-green-600 hover:bg-green-800 text-white h-14 rounded-2xl font-bold text-base md:text-lg transition-all shadow-sm active:scale-[0.98]"
            >
              Create Cash Order
            </AppButton>
          </div>
        </div>
      </div>
    </form>
  );
}
