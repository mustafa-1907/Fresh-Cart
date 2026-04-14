"use client";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { UserPlus } from "lucide-react";
import AppButton from "@/components/shared/AppButton/AppButton";
import { sendUserData } from "./register.services";
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from "./register.schema";



export default function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver : zodResolver(formSchema )
  });


  return (
    <form onSubmit={handleSubmit(sendUserData)} className="space-y-5 w-full max-w-md">
      
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold">Name*</FieldLabel>
            <Input {...field} placeholder="Ali" className="bg-white h-11" />
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold">Email*</FieldLabel>
            <Input {...field} type="email" placeholder="ali@example.com" className="bg-white h-11" />
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold">Password*</FieldLabel>
            <Input {...field} type="password" placeholder="create a strong password" className="bg-white h-11" />


            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <Controller
        name="rePassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold">Confirm Password*</FieldLabel>
            <Input {...field} type="password" placeholder="confirm your password" className="bg-white h-11" />
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <Field className="space-y-1.5" data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold">Phone Number*</FieldLabel>
            <Input {...field} placeholder="+1 234 567 8900" className="bg-white h-11" />
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />



      <AppButton 
        type="submit" 
        className="w-full bg-[#10a34a] hover:bg-[#0d8a3e] text-white h-12 rounded-lg font-bold flex gap-2 items-center justify-center mt-4"
      >
        <UserPlus size={18} />
        Create My Account
      </AppButton>
    </form>
  );
}