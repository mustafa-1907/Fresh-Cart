import FeatureItem from "@/components/FeatureItem/FeatureItem";
import { ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import avatar from "@images/review-author.webp";
import RegisterForm from "./RegisterForm";
export default function page() {
return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10">
            Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
          </p>

          <div className="mb-8">
            <FeatureItem 
              icon={<Star size={20} fill="currentColor" />}
              iconColor="bg-green-100 text-green-600"
              title="Premium Quality"
              description="Premium quality products sourced from trusted suppliers."
            />
            <FeatureItem 
              icon={<Truck size={20} />}
              iconColor="bg-green-100 text-green-500"
              title="Fast Delivery"
              description="Same-day delivery available in most areas"
            />
            <FeatureItem 
              icon={<ShieldCheck size={20} />}
              iconColor="bg-green-50 text-green-700 border border-green-100"
              title="Secure Shopping"
              description="Your data and payments are completely secure"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                <Image src={avatar} alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Sarah Johnson</h4>
                 <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600 italic text-sm leading-relaxed">
              FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
             <RegisterForm />
          </div>
        </div>

      </div>
    </div>
  );
}
