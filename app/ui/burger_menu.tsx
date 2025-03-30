'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logos/logo.svg';

export default function BurgerMenu({ position }: { position: 'left' | 'right' }) {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        // Effect runs when showMenu changes
        if (showMenu) {
            // When menu is open, add class to body to prevent scroll
            document.body.classList.add('overflow-hidden');
        } else {
            // When menu is closed, remove class to restore scroll
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showMenu]); // 3. Dependency array: effect runs when showMenu changes
    
    const sideMenuCN = classNames(
        'sm:w-1/6',
        'w-1/2',
        'fixed',
        'top-0',
        'h-full',
        'bg-white',
        'ease-in-out',
        'duration-300',
        {
            'sm:translate-x-0': showMenu,
            'sm:translate-x-full': !showMenu,
            'translate-x-0': showMenu,
            '-translate-x-full': !showMenu,
            'sm:right-0': position == 'right',
            'left-0': position == 'left'
        }
    )

    const darkEffectCN = classNames(
        'left-0',
        'top-0',
        'fixed',
        'duration-300',
        'ease-in-out',
        'h-full',
        'w-screen',
        'bg-black',
        'transition-opacity',
        'transition',
        {
            'opacity-60': showMenu,
            'opacity-0': !showMenu
        }
    )

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div>
            <div onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:h-10 sm:w-10 h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>

            <div
                onClick={showMenu ? toggleMenu : undefined}
                className={`${darkEffectCN} z-40`}
                style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
            />
            <div
                className={`${sideMenuCN} z-50`}>
                <div
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black">
                            <line x1="0" y1="0" x2={20} y2="0"/>
                            <line x1={20} y1={0} x2={12} y2={12}/>
                            <line x1={20} y1={0} x2={12} y2={-12}/>
                        </svg>
                    </div>
                <div className='flex items-center justify-center pt-4'>
                    <Image
                        src={Logo}
                        alt="Functional Interiors Logo"
                        priority
                        className="w-auto h-16 sm:h-24 mt-5 mb-5"
                    />
                </div>
                <ul className="p-4 space-y-8 text-lg">
                    <li>
                        <div className="flex items-center">
                            <div className="w-3 h-5 rounded-l-full bg-[#0097b2] mr-2" />
                            <Link href="/">Home</Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="w-3 h-5 rounded-l-full bg-[#ffde59] mr-2" />
                            <Link href="/">Services</Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="w-3 h-5 rounded-l-full bg-[#80b26d] mr-2" />
                            <Link href="/">Projects</Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="w-3 h-5 rounded-l-full bg-[#0097b2] mr-2" />
                            <Link href="/">Common questions</Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="w-3 h-5 rounded-l-full bg-[#ffde59] mr-2" />
                            <Link href="/">Contact us!</Link>
                        </div>
                    </li>
                </ul>
                <div className="absolute bottom-0 w-full p-4 text-center text-sm text-gray-500">
                    <hr className="mb-5"/>
                    <p>© 2025 Functional Interiors</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div >
    );
}