'use client';
import React, {useEffect, useState} from "react";

import "./carousel.css"

interface CarouselItemProps {
    children: React.ReactNode;
    width?: string;
    color?: string;
}

interface CarouselProps {
    children: React.ReactNode;
}

export const CarouselItem = ({ children, width, color }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex: number): void => {
        const childrenCount = React.Children.count(children);
        setActiveIndex((newIndex + childrenCount) % childrenCount);
    };    
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 3000);
    
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [activeIndex]);
    return (
        <div className="carousel relative">
                <div className="flex absolute bottom-0 inset-x-0 z-10 gap-2 place-content-center mb-4">
                    {React.Children.map(children, (child, index) => {
                        return <div className={`rounded-full border-black border w-3 h-3 ${index === activeIndex ? "bg-slate-300" : ""}`}/>
                    })}
                </div>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
};

export default Carousel;