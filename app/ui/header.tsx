"use client"
import { SocialIcon } from 'react-social-icons';
import BurgerMenu from './burger_menu';
import Image from 'next/image';
import Link from 'next/link';
import FullLogo from '@/public/logos/full_logo.svg';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname()
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
        <Link href="/es" locale="es">ES</Link>
        <Link href="/en" locale="en">EN</Link>
        <Link href="/hr" locale="hr">HR</Link>
        <BurgerMenu position='right' />
      </div>
    </div>
  );
}