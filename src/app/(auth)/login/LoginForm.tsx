"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./login.schema";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import AppButton from "@/components/shared/AppButton/AppButton";
import { Mail, Lock, Eye } from "lucide-react";
import { toast } from "sonner";
import { LoginRequest } from "./login";
import { signIn } from 'next-auth/react';

export default function LoginForm() {


  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });


  async function handleSignIn(data : LoginRequest){
    // const s = await signIn("credentials",{...data , redirect:false})
    // console.log(s);
    
  toast.promise(signIn("credentials",{...data , redirect:false}), {
    loading: "Logging in...",
    success: () => {
      location.href = "/"
      return (`Logged in successfully!`);
    },
    error: "Failed to login. Please try again.",
  });
  }


  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="w-full space-y-5">
      
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel className="text-slate-700 font-semibold mb-1.5 block text-sm">Email Address</FieldLabel>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input {...field} placeholder="Enter your email" className="pl-10 h-12 bg-white rounded-xl" />
            </div>
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex justify-between items-center mb-1.5">
              <FieldLabel className="text-slate-700 font-semibold block text-sm">Password</FieldLabel>
              <button type="button" className="text-[11px] font-bold text-[#10a34a] hover:underline">Forgot Password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input {...field} type="password" placeholder="Enter your password" className="pl-10 pr-10 h-12 bg-white rounded-xl" />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" size={18} />
            </div>
            {fieldState.invalid && <FieldError>{fieldState.error?.message}</FieldError>}
          </Field>
        )}
      />

      <div className="flex items-center gap-2">
        <Checkbox id="keepMe" />
        <label htmlFor="keepMe" className="text-xs font-semibold text-slate-600">Keep me signed in</label>
      </div>

      <AppButton type="submit" className="w-full bg-[#10a34a] hover:bg-[#0d8a3e] text-white h-12 rounded-xl font-bold mt-2">
        Sign In
      </AppButton>
    </form>
  );
}