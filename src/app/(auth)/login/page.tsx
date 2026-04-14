import Image from "next/image";
import { Truck, ShieldCheck, Headphones, Lock, Users, Star } from "lucide-react";
import { InfoBadge } from "@/components/InfoBadge/InfoBadge";
import loginImage from "@images/login.png";
import LoginForm from "./LoginForm";
import Link from "next/link";
export default function page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="relative w-full max-w-125 aspect-4/3 bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden mb-8 border border-slate-50">
            <Image
              src={loginImage}
              alt="FreshCart Shopping Cart"
              fill
              className="object-contain p-8"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h1>
          
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Join thousands of happy customers who trust FreshCart for their daily grocery needs
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <InfoBadge icon={<Truck size={16} />} text="Free Delivery" />
            <InfoBadge icon={<ShieldCheck size={16} />} text="Secure Payment" />
            <InfoBadge icon={<Headphones size={16} />} text="24/7 Support" />
          </div>
        </div>

<div className="w-full max-w-125 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-50 flex flex-col items-center">
      
      <div className="flex items-center gap-1 mb-2">
        <span className="text-2xl font-black text-[#10a34a]">Fresh</span>
        <span className="text-2xl font-black text-[#2d3748]">Cart</span>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-1">Welcome Back!</h2>
      <p className="text-slate-500 text-sm mb-8">Sign in to continue your fresh shopping experience</p>



      <div className="w-full flex items-center gap-4 mb-6">
        <div className="h-px bg-slate-100 flex-1"></div>
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">or continue with email</span>
        <div className="h-px bg-slate-100 flex-1"></div>
      </div>

      <LoginForm />

      <div className="mt-8 text-center space-y-6">
        <p className="text-sm text-slate-500">
          New to FreshCart?{" "}
          <Link href="/signup" className="text-[#10a34a] font-bold hover:underline">
            Create an account
          </Link>
        </p>

        <div className="flex items-center justify-center gap-6 text-[11px] font-bold text-slate-400">
          <div className="flex items-center gap-1">
            <Lock size={12} /> SSL Secured
          </div>
          <div className="flex items-center gap-1">
            <Users size={12} /> 50K+ Users
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} fill="currentColor" /> 4.9 Rating
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}