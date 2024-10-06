import Image from "next/image";

const ColorTextBoxes = ({
  title,
  text,
  textpos,
  color,
  imgsrc
}) => (
  <div className="relative h-64 w-full">
    <img className="w-full h-full object-cover" src={`/${imgsrc}`} />
    <div className={`${textpos == "left" ? "rounded-r-lg left-0 fixed" : "rounded-l-lg left-40"} bg-[${color}] absolute w-64 ml-0 top-40 border-dotted sm:rounded-r-lg sm:rounded-l-lg`} >
      <div className={`${textpos == "left" ? "text-right mr-3 pl-5" : "ml-3 pr-5"} mt-3 mb-3`}>
        <p className="font-bold">{title}</p>
        <p className="">{text}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <div className="bg-[#f1f1f1] mb-10 pb-10">
        <div className="columns-6 flex mb-10 h-36 sm:columns-3">
          <div>
            <img className="object-fill h-full w-full" src="/1.jpg" />
          </div>
          <div className="aspect-w-16 aspect-h-9 ">
            <img className="object-fill h-full w-full" src="/2.jpg" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-fill h-full w-full" src="/3.jpg" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-fill h-full w-full" src="/4.jpg" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-fill h-full w-full" src="/5.webp" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-fill h-full w-full" src="/6.webp" />
          </div>
        </div>
        <div>
          <p className="sm:text-8xl text-3xl text-center text-[#4e5152]">You deserve a space that is</p>
          <p className="sm:text-8xl text-3xl text-center text-[#4e5152]">beautiful and comfortable,</p>
          <p className="sm:text-8xl text-3xl text-center text-[#4e5152]">but above all, functional!</p>
        </div>
      </div>
      <div>
        <p className="text-center sm:text-7xl text-xl text-[#4e5152]">SERVICES</p>
      </div>

      <div className="grid grid-cols-1 gap-10 pl-5 sm:pl-0 sm:grid-cols-3">
        <ColorTextBoxes
          title={"SPACE PLANNING"}
          text={"Not sure got to arrange your furniture? We can make your space work for your needs."}
          textpos="right"
          color={"#caf4ae"}
          imgsrc={"3.jpg"} />

        <ColorTextBoxes
          title={"INTERIOR DESIGN"}
          text={"Struggling to come up with a coherent vision for your home? With us, from vision to plan."}
          textpos="left"
          color={"#f4daae"}
          imgsrc={"1.jpg"} />

        <ColorTextBoxes
          title={"FURNITURE SOURCING"}
          text={"Are you overwhelmed by endless options? Let us make your choices easier."}
          textpos="right"
          color={"#aed7f4"}
          imgsrc={"3.jpg"} />
      </div>
    </main>
  );
}

        {/* 
      <div className="pr-5 mt-10 relative h-64 w-full">
        <img className="pl-5 w-full h-full object-cover" src="/1.jpg" />
        <div className="bg-[#f4daae] w-64 ml-0 rounded-r-lg absolute top-40 border-dotted">
          <div className="mt-3 mb-3 mr-3 text-right">
            <p className="font-bold">INTERIOR DESIGN</p>
            <p>Struggling to come up with a coherent vision for your home? With us, a vision becomes a plan.</p>
          </div>
        </div>
      </div> */}