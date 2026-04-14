import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Brands", href: "/brands" },
    { name: "Electronics", href: "/" },
    { name: "Men's Fashion", href: "/" },
    { name: "Women's Fashion", href: "/" },
  ],
  account: [
    { name: "My Account", href: "/" },
    { name: "Order History", href: "/" },
    { name: "Wishlist", href: "/" },
    { name: "Shopping Cart", href: "/" },
    { name: "Sign In", href: "/" },
    { name: "Create Account", href: "/" },
  ],
  support: [
    { name: "Contact Us", href: "/" },
    { name: "Help Center", href: "/" },
    { name: "Shipping Info", href: "/" },
    { name: "Returns & Refunds", href: "/" },
    { name: "Track Order", href: "/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
    { name: "Cookie Policy", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1219] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white inline-block p-3 rounded-lg">
               <h1 className="text-[#00b853] text-2xl font-bold flex items-center gap-2">
                 🛒 FreshCart
               </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00b853]" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00b853]" />
                <span>support@freshcart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00b853]" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[Mail, Mail ,Mail ,Mail].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#00b853] transition-colors cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {footerLinks.shop.map((link) => (
                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Account</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {footerLinks.account.map((link) => (
                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 FreshCart. All rights reserved.
          </p>
          <div className="flex items-center gap-6 grayscale opacity-50">
             <div className="flex items-center gap-2 text-sm"><span className="font-bold">Visa</span></div>
             <div className="flex items-center gap-2 text-sm"><span className="font-bold">Mastercard</span></div>
             <div className="flex items-center gap-2 text-sm"><span className="font-bold">PayPal</span></div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}