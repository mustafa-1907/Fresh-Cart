import { ArrowRight, Flame, Sparkles } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const banners = [
  {
    type: "Deal of the Day",
    icon: <Flame className="w-4 h-4 text-white" />,
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "Use code: ORGANIC40",
    buttonText: "Shop Now",
    gradient: "from-[#00A86B] to-[#00703C]",
    overlayColor: "text-white",
    buttonVariant: "white",
    navigate : "/shop"
  },
  {
    type: "New Arrivals",
    icon: <Sparkles className="w-4 h-4 text-white" />,
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "Use code: FRESH25",
    buttonText: "Explore Now",
    gradient: "from-[#FF6B26] to-[#E53E3E]",
    overlayColor: "text-white",
    buttonVariant: "white",
    navigate : "/brands"
  },
];

export default function HomeBanners() {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner, index) => (
          <Card 
            key={index} 
            className={`group border-none shadow-sm rounded-2xl overflow-hidden bg-linear-to-r ${banner.gradient} ${banner.overlayColor} hover:shadow-xl transition-all duration-300 relative`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500" />

            <CardContent className="flex flex-col items-start justify-center p-10 h-full relative z-10">
              
              <div className="flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/20 border border-white/10">
                {banner.icon}
                <span className="text-sm font-medium">{banner.type}</span>
              </div>
              
              <h3 className="text-3xl font-extrabold mb-3 tracking-tight">
                {banner.title}
              </h3>
              
              <p className="text-base text-white/90 mb-7 max-w-sm">
                {banner.description}
              </p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-4xl font-extrabold tracking-tighter">
                  {banner.discount}
                </span>
                <span className="text-sm font-medium text-white/80">
                  {banner.code}
                </span>
              </div>
              <Link 
                href={banner.navigate} 
                className="font-bold flex items-center gap-2 text-[#001f3f] cursor-pointer bg-white rounded-full px-7 py-3 hover:bg-slate-50 transition-colors"
              >
                {banner.buttonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}