import { SocialIcon } from 'react-social-icons';
import BurgerMenu from './burger_menu';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="pt-5 pb-5 gap-8 bg-[#f1f1f1] items-center grid-cols-12 flex sm:justify-between sm:pb-10 sm:pt-10 sm:pl-10 sm:pr-10">
        <div className='sm:hidden ml-3 col-span-3'>
          <BurgerMenu position='left' />
        </div>
      <div className='sm:gap-6 hidden sm:flex'>
        <SocialIcon url="https://x.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://instagram.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://facebook.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://pinterest.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://tiktok.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
      </div>
      <div className='col-span-9 flex justify-center items-center'>
        <Image src="/logo.png" alt="Functional Interiors" width={280} height={300} layout="intrinsic" className="mx-auto" />
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