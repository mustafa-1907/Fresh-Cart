import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req : NextRequest){

const pathName = req.nextUrl.pathname;
  
  // 1. تحديد نوع الصفحة
  const isAuthPage = pathName === '/login' || pathName === '/signup';
  
  // 2. محاولة جلب التوكن
  const token = await getToken({ req });

  // 3. لو المستخدم في صفحة Login أو Signup ومعه توكن (مسجل دخول فعلاً)
  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  // 4. لو المستخدم بيحاول يدخل صفحة محمية (زي الـ Cart) وهو مش معه توكن
  if (!token) {
    // بنضيف الـ callbackUrl عشان بعد ما يسجل دخول يرجعه للصفحة اللي كان عايزها
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 5. لو معه توكن وبيحاول يدخل صفحة محمية، سيبه يعدي عادي
  return NextResponse.next();
}

// الـ Matcher بيحدد الـ middleware يشتغل على أنهي صفحات
export const config = {
  matcher: ['/cart', '/wishlist',  '/login', "/signup" ,"/checkout"]
};