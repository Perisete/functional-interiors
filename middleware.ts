import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

let locales = ['en', 'es', 'hr'];
let defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  // @ts-ignore
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  try {
    return match(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isStaticAssetOrApi =
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    /\.(.*)$/.test(pathname) ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/static');

  if (isStaticAssetOrApi) {
    return undefined;
  }

  const firstSegment = pathname.split('/')[1];
  const pathnameLocale = locales.find(locale => locale === firstSegment);

  if (pathnameLocale) {

    if (pathnameLocale === defaultLocale) {
      const newPath = pathname.replace(`/${defaultLocale}`, '') || '/';
      const newUrl = new URL(newPath + request.nextUrl.search, request.url);
      console.log(`Middleware: Quitando prefijo default (${pathname} -> ${newPath})`);
      return NextResponse.redirect(newUrl, 308); // 308 = Permanent Redirect
    } else {
      console.log(`Middleware: Prefijo idioma OK (${pathname})`);
      return undefined;
    }

  } else {
    const preferredLocale = getLocale(request);

    if (preferredLocale === defaultLocale) {
      const rewritePath = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
      const rewriteUrl = new URL(rewritePath + request.nextUrl.search, request.url);
      console.log(`Middleware: Reescribiendo ${pathname} a ${rewriteUrl.pathname} (interno)`);
      return NextResponse.rewrite(rewriteUrl);
    } else {
      const newPath = `/${preferredLocale}${pathname === '/' ? '' : pathname}`;
      const newUrl = new URL(newPath + request.nextUrl.search, request.url);
      console.log(`Middleware: Redirigiendo ${pathname} a idioma preferido ${newUrl.pathname}`);
      return NextResponse.redirect(newUrl, 307); // 307 = Temporary Redirect
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|static|favicon.ico|.*\\.).*)',
  ],
};