interface ColorTextBoxProps {
  title: string
  text: string
  textpos: 'left' | 'right'
  color: string
  imgsrc: string
  cicrle_text: string
  circle_color: string
}

export const ColorTextBox = ({
  title,
  text,
  textpos,
  color,
  imgsrc,
  cicrle_text,
  circle_color
}: ColorTextBoxProps) => (
  <div className="relative h-64 flex">
    <img className="w-full pl-5 pr-5 h-full z-0 absolute" src={`/${imgsrc}`} />
    <div className={`h-full w-full z-10 flex justify-end ${textpos === "left" ? "flex-row-reverse" : ""} items-center mt-14`}>
      <div className={`bg-[${circle_color}] flex items-center justify-center ${textpos === "left" ? "w-8 h-16 rounded-r-full " : "w-8 h-16 rounded-l-full"}`}>
        <p className={`text-[10px] ${textpos === "left" ? "mr-1" : "ml-1"} leading-3 font-bold text-center -rotate-90`}>{cicrle_text}</p>
      </div>
      <div className={`${textpos === "left" ? "rounded-r-lg left-0" : "rounded-l-lg left-40"} z-20 w-64 ml-0 top-40 border-dotted sm:rounded-r-lg sm:rounded-l-lg`} style={{ backgroundColor: color }} >
        <div className={`${textpos === "left" ? "text-right mr-3 pl-5" : "ml-3 pr-5"} mt-3 mb-3`}>
          <p className="font-bold">{title}</p>
          <p className="text-[14px]">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ColorTextBox;