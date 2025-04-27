'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from "next/image";
import Logo from '@/public/logos/logo.svg';

export default function BurgerMenu({ position, locales = ["/es", "/en", "/hr"] }: { position: 'left' | 'right', locales?: string[] }) {
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
    console.log("locales:", locales[0]);
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
                    className={`relative cursor-pointer
                    ${position === 'right' ? 'top-3 left-2' : 'top-3 right-2 place-self-end'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={position === 'right' ? "M15 19l-7-7 7-7" : "M9 19l7-7-7-7"}
                        />
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
                            <div className="w-3 h-5 rounded-l-full bg-[#0097b2] mr-2 flex-shrink-0" />
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
                <div className="absolute bottom-0 w-full p-4 text-center text-sm text-gray-500 flex flex-col gap-5">
                    <hr />
                    <div className="flex justify-center align-middle gap-6 sm:hidden">
                        <Link href={locales[0]} locale="es">ES</Link>
                        <Link href={locales[1]} locale="en">EN</Link>
                        <Link href={locales[2]} locale="hr">HR</Link>
                    </div>
                    <div>
                        <p>© 2025 Functional Interiors</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </div >
    );
}