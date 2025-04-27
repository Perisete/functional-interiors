"use client"
import { SocialIcon } from 'react-social-icons';
import BurgerMenu from './burger_menu';
import Image from "next/legacy/image";
import Link from 'next/link';
import FullLogo from '@/public/logos/full_logo.svg';
import { usePathname } from 'next/navigation';

const supportedLocales = ['en', 'es', 'hr'];

export default function Header() {
  const pathname = usePathname()
  const getLocalizedPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`; // Fallback if pathname is null/undefined

    // Split the path into segments, removing empty strings (from leading/trailing slashes)
    const pathSegments = pathname.split('/').filter(Boolean);

    // Check if the first segment is a known locale and remove it
    if (pathSegments.length > 0 && supportedLocales.includes(pathSegments[0])) {
      pathSegments.shift(); // Remove the current locale prefix
    }

    // Reconstruct the path with the new locale
    const basePath = pathSegments.join('/');
    return `/${targetLocale}${basePath ? '/' + basePath : ''}`; // Add leading slash and conditional slash for base path
  };
  const esHref = getLocalizedPath('es');
  const enHref = getLocalizedPath('en');
  const hrHref = getLocalizedPath('hr');
  return (
    <div className="pt-5 pb-5 gap-8 items-center grid-cols-12 flex sm:justify-between sm:pb-10 sm:pt-10 sm:pl-10 sm:pr-10">
      <div className='sm:hidden ml-3 col-span-3'>
        <BurgerMenu position='left' />
      </div>
      <div className='sm:gap-6 hidden sm:flex'>
        <SocialIcon url="https://x.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://www.instagram.com/functionalinteriors/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://facebook.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://pinterest.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://tiktok.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
      </div>
      <div className='col-span-9 flex justify-center items-center'>
        <Link href="/">
          <Image
            src={FullLogo}
            alt="Functional Interiors"
            className="w-auto h-6 sm:h-14"
            priority
          />
        </Link>
      </div>
      <div className="hidden cursor-pointer sm:flex items-center gap-4">
        <Link href={esHref} locale="es">ES</Link>
        <Link href={enHref} locale="en">EN</Link>
        <Link href={hrHref} locale="hr">HR</Link>
        <BurgerMenu position='right' />
      </div>
    </div>
  );
}