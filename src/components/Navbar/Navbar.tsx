"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {

  ShoppingCart,
  User,
  Search,
  Menu,
  Headphones,
  User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@images/freshcart-logo-49f1b44d.svg";
import { signOut, useSession } from "next-auth/react";
import avatar from "@images/user.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import AppButton from "@/components/shared/AppButton/AppButton";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext/CartContext";
import { getUserCart } from "@/components/AddToCart/AddToCart.action";

const categories = [
  { title: "All Categories", href: "/categories" },
];

export default function Navbar() {
  const { data } = useSession();
  const {cartCount ,setCartCount} = React.useContext(CartContext)
  const router = useRouter();
  async function handleLogout() {
    await signOut({ redirect: false });
    router.push("/login");
  }

const { data: session, status } = useSession(); 

React.useEffect(() => {
  if (status === "authenticated" && session) {
    const fetchCart = async () => {
      try {
        const { numOfCartItems } = await getUserCart();
        setCartCount(numOfCartItems || 0);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  } else if (status === "unauthenticated") {
    setCartCount(0);
  }
}, [status, session, setCartCount]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="Freshcart Logo"
              width={160}
              height={30}
              className="w-32 md:w-40"
            />
          </Link>

          <div className="hidden md:relative md:flex flex-1 max-w-md lg:max-w-xl items-center">
            <Input
              type="text"
              placeholder="Search for products, brands and more..."
              className="h-10 w-full rounded-md border-gray-200 pr-12 focus-visible:ring-green-500"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 h-10 w-10 text-gray-500 hover:bg-transparent"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/shop" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Shop
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-green-600 font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-50 gap-1 p-2 bg-white shadow-lg rounded-md border">
                      {categories.map((category) => (
                        <li key={category.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-green-600 focus:bg-slate-50 focus:text-green-600"
                            >
                              <div className="text-sm font-medium leading-none">
                                {category.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/brands" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Brands
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden xl:flex items-center gap-2 border-l pl-4 mr-2">
              <div className="rounded-full bg-green-50 p-2">
                <Headphones className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-[11px] leading-tight">
                <p className="text-gray-400">Support</p>
                <p className="font-bold whitespace-nowrap">24/7 Help</p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">

              <Link href="/cart" className="flex items-center gap-4 group">
                <div className="relative w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <ShoppingCart className="h-5 w-5" />

                  {session &&  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>}
                 
                </div>
                <span className="text-sm font-medium text-slate-700 md:hidden">
                  My Cart
                </span>
              </Link>
              {data ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <AppButton variant="destructive">
                      <Avatar>
                        <AvatarImage src={avatar} width={22} height={33} />
                        <AvatarFallback>
                          <User2 />
                        </AvatarFallback>
                      </Avatar>
                    </AppButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-50 me-5 mt-4">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>
                        <div className="flex justify-center items-center gap-3  py-3 ">
                          <div className="size-10 bg-green-200 flex items-center justify-center rounded-full p-1">
                            <User2 />
                          </div>
                          <div className="">
                            <p className="text-sm">{data.user?.name}</p>
                          </div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-500 text-lg"
                        onClick={handleLogout}
                      >
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  className="hidden md:flex bg-green-600 hover:bg-green-700 text-white rounded-full px-5 h-9 gap-2 items-center"
                  href="/login"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              )}

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="default"
                      className="rounded-full h-9 w-9 p-0 bg-green-600 hover:bg-green-700"
                    >
                      <Menu className="h-5 w-5 text-white" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-75 sm:w-100 p-0 flex flex-col h-full"
                  >
                    <SheetHeader className="p-4 border-b flex-row items-center justify-between space-y-0">
                      <Image
                        src={logo}
                        alt="Freshcart"
                        width={140}
                        height={30}
                      />
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 border-b">
                        <div className="relative flex items-center">
                          <Input
                            placeholder="Search products..."
                            className="h-11 rounded-md pr-12 bg-slate-50 border-gray-100"
                          />
                          <Button
                            size="icon"
                            className="absolute right-1 h-9 w-9 bg-green-600 hover:bg-green-700"
                          >
                            <Search className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 space-y-6 border-b">
                        <nav className="flex flex-col gap-5">
                          <Link
                            href="/"
                            className="text-base font-medium text-slate-700 hover:text-green-600"
                          >
                            Home
                          </Link>
                          <Link
                            href="/shop"
                            className="text-base font-medium text-slate-700 hover:text-green-600"
                          >
                            Shop
                          </Link>
                          <Link
                            href="/categories"
                            className="text-base font-medium text-slate-700 hover:text-green-600"
                          >
                            Categories
                          </Link>
                          <Link
                            href="/brands"
                            className="text-base font-medium text-slate-700 hover:text-green-600"
                          >
                            Brands
                          </Link>
                        </nav>
                      </div>

                      <div className="p-4 space-y-4 border-b">

                        <Link
                          href="/cart"
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <ShoppingCart className="h-5 w-5" />
                          </div>
                          <span className="text-base font-medium text-slate-700">
                            Cart{" "}
                            {session && <span className="px-2 py-1 ms-3  rounded-full bg-green-200 text-green-600">
                             {cartCount}
                            </span>}
                            
                          </span>
                        </Link>
                      </div>

                      <div className="p-4 grid grid-cols-2 gap-3 border-b">
                        <Button className="bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-lg">
                          Sign In
                        </Button>
                        <Button
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 font-bold h-12 rounded-lg"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 mt-auto m-4 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600">
                          <Headphones className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">
                            Need Help?
                          </span>
                          <Link
                            href="/support"
                            className="text-sm text-green-600 font-medium hover:underline"
                          >
                            Contact Support
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
