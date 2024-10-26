'use client';
import React, {useEffect, useState} from "react";

import "./carousel.css"

// interface CarouselItem{
//     children: string
//     width: string
// }

// interface Carousel{
//     children: string
// }

export const CarouselItem = ({ children, width, color }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 3000);
    
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });
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