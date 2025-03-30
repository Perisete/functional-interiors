import { SocialIcon } from 'react-social-icons';
import BurgerMenu from './burger_menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="pt-5 pb-5 gap-8 items-center grid-cols-12 flex sm:justify-between sm:pb-10 sm:pt-10 sm:pl-10 sm:pr-10">
      <div className='sm:hidden ml-3 col-span-3'>
        <BurgerMenu position='left' />
      </div>
      <div className='sm:gap-6 hidden sm:flex'>
        <SocialIcon url="https://x.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://instagram.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://facebook.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://pinterest.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
        <SocialIcon url="https://tiktok.com/" bgColor='#ffffff' fgColor='black' className='rounded-lg border-black border-2' style={{ height: 30, width: 30 }} />
      </div>
      <div className='col-span-9 flex justify-center items-center'>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Functional Interiors"
            width={280}
            height={300}
            layout="intrinsic"
            className="mx-auto sm:w-[500px] sm:h-[550px]"
          />
        </Link>
      </div>
      <div className="hidden cursor-pointer sm:flex items-center gap-4">
        <p>ES</p>
        <p>EN</p>
        <p>HR</p>
        <BurgerMenu position='right' />
      </div>
    </div>
  );
}