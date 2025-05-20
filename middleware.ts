import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import type { NextRequest } from 'next/server'

 
let locales = ['en', 'es', 'hr']
let defaultLocale = 'en';
 
function getLocale(request: NextRequest): string { // Add type annotation
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  
    // console.log("Negotiated languages: ", languages);
    try {
      // match(negotiatedLanguages, supportedLocales, defaultLocale)
      return match(languages, locales, defaultLocale);
    } catch (e) {
      console.error("Error matching locale in middleware: ", e);
      // Fallback to default if matching fails
      return defaultLocale;
    }
  }
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  // console.log("Pathname: ", pathname)
  // console.log("Pathname has locale: ", pathnameHasLocale)
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // console.log("Redirecting to: ", request.nextUrl.pathname)
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Run on all paths except for the ones starting with _next or api
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}