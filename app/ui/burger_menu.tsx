'use client';

import { useState, useRef } from 'react';

export default function BurgerMenu({ position }: { position: string }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (menuRef.current){
            if (menuRef.current.classList.contains("hidden")){
                menuRef.current.classList.remove("hidden");
            }
        }
    };

    const handleTransitionEvent = () => {
        if (!showMenu && menuRef.current) {
            menuRef.current.classList.add("hidden");
        }
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


            <div onClick={toggleMenu} ref={menuRef} onTransitionEnd={handleTransitionEvent} className={`left-0 hidden top-0 fixed duration-300 ease-in-out h-screen w-screen bg-black transition-opacity transition ${showMenu ? 'opacity-60' : 'opacity-0'}`} />
            <div
                className={`sm:w-1/6 w-1/3 fixed top-0 ${position}-0 h-screen bg-white ease-in-out duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="p-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div >
    );
}