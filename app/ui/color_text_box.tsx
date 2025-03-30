import Link from 'next/link'
import { SemicircleLink } from './semicircle_link'

interface ColorTextBoxProps {
    title: string
    text: string
    textpos: 'left' | 'right'
    color: string
    imgsrc: string
    circle_text: string
    circle_color: string
    link?: string
}

export const ColorTextBox = ({
    title,
    text,
    textpos,
    color,
    imgsrc,
    circle_text,
    circle_color,
    link = "/"
}: ColorTextBoxProps) => (

    <div>
        <div className="h-64 mx-5 rounded-3xl overflow-hidden">
            <img className="h-full w-full object-cover" src={`/${imgsrc}`} />
        </div>
        <div className="relative -mt-16">
            <div
                className={`p-5
                ${textpos === "left" ? "rounded-r-3xl mr-32 left-0" : "rounded-l-3xl ml-32 right-0"}
                `}
                style={{ backgroundColor: color }}>
                <p className="font-bold text-[13px]">{title}</p>
                <p className="text-[14px]">{text}</p>
            </div>
            <SemicircleLink
                link={link}
                circle_text={circle_text}
                circle_color={circle_color}
            />
        </div>
    </div>

);

export default ColorTextBox;