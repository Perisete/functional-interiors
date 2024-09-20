import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative columns-6 sm:columns-3 flex mb-10">
        <div className="relative aspect-w-16 aspect-h-9">
          <img className="object-fill h-full w-full" src="/1.jpg"/>
        </div>
        <div className="relative aspect-w-16 aspect-h-9 ">
          <img className="object-fill h-full w-full" src="/2.jpg"/>
        </div>
        <div className="relative aspect-w-16 aspect-h-9">
          <img className="object-fill h-full w-full" src="/3.jpg"/>
        </div>
        <div className="relative aspect-w-16 aspect-h-9">
          <img className="object-fill h-full w-full" src="/4.jpg"/>
        </div>
        <div className="relative aspect-w-16 aspect-h-9">
          <img className="object-fill h-full w-full" src="/5.webp"/>
        </div>
        <div className="relative aspect-w-16 aspect-h-9">
          <img className="object-fill h-full w-full" src="/6.webp"/>
        </div>
      </div>
      <div>
        <p className="text-8xl text-center text-[#4e5152]">You deserve a space that is</p>
        <p className="text-8xl text-center text-[#4e5152]">beautiful and comfortable,</p>
        <p className="text-8xl text-center text-[#4e5152]">but above all, functional!</p>
      </div>
    </main>
  );
}