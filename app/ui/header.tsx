'use client'; // This line marks the component as a Client Component

import { SocialIcon } from 'react-social-icons';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="md:pl-10 md:pr-10 bg-[#f1f1f1] flex justify-between items-center pb-10 pt-10">
      <div className='flex md:gap-6'>
        <SocialIcon url="https://x.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://instagram.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://facebook.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://pinterest.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
        <SocialIcon url="https://tiktok.com/" bgColor='#f1f1f1' fgColor='black' className='rounded-lg border-black border-2' />
      </div>
      <div>
        <h1 className='text-2xl md:text-7xl text-[#4e5152]'>Functional Interiors</h1>
      </div>
      <div className="cursor-pointer flex items-center gap-4" onClick={toggleMenu}>
        <p>ES</p>
        <p>EN</p>
        <p>HR</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {showMenu && (
          <div className="absolute top-12 right-0 bg-white shadow-md rounded-md">
            <ul className="p-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}