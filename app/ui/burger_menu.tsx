'use client';

import { useState } from 'react';
import classNames from 'classnames';

export default function BurgerMenu({ position }: { position: 'left' | 'right' }) {
    const [showMenu, setShowMenu] = useState(false);

    const sideMenuCN = classNames(
        'sm:w-1/6',
        'w-1/3',
        'fixed',
        'top-0',
        'h-screen',
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
        'h-screen',
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
                className={darkEffectCN}
                style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
            />
            <div
                className={sideMenuCN}>
                <ul className="p-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div >
    );
}