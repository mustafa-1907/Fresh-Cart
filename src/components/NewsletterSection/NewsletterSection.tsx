import { Mail, Smartphone, Apple, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NewsletterSection() {
  return (
    <div className="container mx-auto p-6 space-y-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <Card className="lg:col-span-2 bg-[#f0fdf4] border-none shadow-sm rounded-[32px] overflow-hidden">
          <CardContent className="p-10 flex flex-col justify-center h-full space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#00b853] rounded-2xl text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="secondary" className="bg-transparent text-[#00b853] border-none p-0 font-bold tracking-widest uppercase text-[10px]">
                  NEWSLETTER
                </Badge>
                <p className="text-xs text-gray-500 font-medium">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Get the Freshest Updates <span className="text-[#00b853]">Delivered Free</span>
            </h2>
            
            <p className="text-gray-600 text-lg">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Fresh Picks Weekly", "Free Delivery Codes", "Members-Only Deals"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 text-sm font-medium text-gray-700 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#00b853]" /> {tag}
                </div>
              ))}
            </div>

            <div className="relative max-w-xl">
              <Input 
                type="email" 
                placeholder="you@example.com" 
                className="h-16 rounded-2xl border-none shadow-sm pl-6 pr-40 text-lg focus-visible:ring-1 focus-visible:ring-[#00b853]"
              />
              <Button className="absolute right-2 top-2 h-12 px-8 rounded-xl bg-[#00b853] hover:bg-[#008a4e] text-white font-bold transition-all">
                Subscribe →
              </Button>
            </div>
            <p className="text-xs text-orange-400 font-medium italic">
              ✨ Unsubscribe anytime. No spam, ever.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#0b1219] text-white border-none shadow-sm rounded-[32px] overflow-hidden relative">
          <CardContent className="p-10 flex flex-col justify-center h-full space-y-6">
            <Badge className="w-fit bg-[#1e293b] text-[#00b853] border-none px-3 py-1 font-bold flex items-center gap-2">
              <Smartphone className="w-3 h-3" /> MOBILE APP
            </Badge>
            
            <h3 className="text-3xl font-bold">Shop Faster on Our App</h3>
            <p className="text-gray-400">Get app-exclusive deals & 15% off your first order.</p>

            <div className="space-y-4">
              <Button variant="outline" className="w-full h-16 rounded-2xl border-gray-700 bg-transparent hover:bg-white hover:text-black transition-all flex justify-start gap-4 px-6 group">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-gray-600">Download on</p>
                  <p className="text-lg font-bold">App Store</p>
                </div>
              </Button>

              <Button variant="outline" className="w-full h-16 rounded-2xl border-gray-700 bg-transparent hover:bg-white hover:text-black transition-all flex justify-start gap-4 px-6 group">
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-gray-600">Get it on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <div className="flex text-yellow-400 tracking-tighter">★★★★★</div>
              <span className="text-xs text-gray-400 font-medium">4.9 • 100K+ downloads</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

