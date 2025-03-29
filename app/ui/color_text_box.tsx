import Link from 'next/link'

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
  link
}: ColorTextBoxProps) => (
<div className="relative h-64 flex">
    <img className="w-full pl-5 pr-5 h-full z-0 absolute rounded-lg" src={`/${imgsrc}`} />
    <div className={`h-full w-full z-10 flex justify-end ${textpos === "left" ? "flex-row-reverse" : ""} items-center mt-14`}>
        <div className={`bg-[${circle_color}] flex items-center justify-center ${textpos === "left" ? "w-8 h-16 rounded-r-full " : "w-8 h-16 rounded-l-full"}`}>
            {/* TODO: make link the whole circle */}
            {/* <a href={`${link}`} className={`text-[10px] ${textpos === "left" ? "mr-1" : "ml-1"} leading-3 font-bold text-center -rotate-90`}>{circle_text}</a> */}
            <Link href={`${link}`} className={`text-[10px] ${textpos === "left" ? "mr-1" : "ml-1"} leading-3 font-bold text-center -rotate-90`}>{circle_text}</Link>

        </div>
        <div className={`${textpos === "left" ? "rounded-r-lg left-0" : "rounded-l-lg left-40"} z-20 w-64 ml-0 top-40 border-dotted sm:rounded-r-lg sm:rounded-l-lg`} style={{ backgroundColor: color }} >
            <div className={`${textpos === "left" ? "text-right mr-3 pl-5" : "ml-3 pr-5"} mt-3 mb-3`}>
                <p className="font-bold text-[13px]">{title}</p>
                <p className="text-[14px]">{text}</p>
            </div>
        </div>
    </div>
</div>
);

export default ColorTextBox;