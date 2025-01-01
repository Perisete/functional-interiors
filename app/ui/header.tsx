import { SocialIcon } from 'react-social-icons';
import BurgerMenu from './burger_menu';

export default function Header() {
  return (
    <div className="sm:pl-10 sm:pr-10 bg-[#f1f1f1] flex sm:justify-between items-center sm:pb-10 sm:pt-10 pt-5 pb-5">
        <div className='sm:hidden ml-3'>
          <BurgerMenu position='left' />
        </div>
      <div className='sm:gap-6 hidden sm:flex'>
        <SocialIcon url="https://x.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://instagram.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://facebook.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://pinterest.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://tiktok.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
      </div>
      <div className='flex-1'>
        <h1 className='sm:text-7xl text-3xl text-[#4e5152] text-center'>functional interiors</h1>
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