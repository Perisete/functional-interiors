import Image from "next/image";
// import "./carousel.css";
import Carousel, { CarouselItem } from "./carousel";
import TitleProp from "./ui/titles";
import ColorTextBox from "./ui/color_text_box";
import Form from "./ui/form";

export default function Home() {
  return (
    <main>
      <div className="pl-3 pr-3 pb-10">
        <div className="grid grid-cols-3 justify-between gap-2 mb-10">
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/1.jpg" alt="" />
          </div>
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/2.jpg" alt="" />
          </div>
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/3.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center sm:px-24"> {/* Working */}
          <div className="col-span-1 w-8 h-16 bg-[#80b26d] rounded-l-full sm:h-36 sm:w-20" />
          <div className="text-[#4e5152] whitespace-nowrap text-2xl col-span-9 pl-2 sm:text-7xl">
            <h1>You deserve a space that is<br />
            beautiful and comfortable,<br />
            but above all, functional!</h1>
          </div>
          <div className="col-span-2 flex flex-row items-end justify-end self-end relative bottom-2">
            <div className="w-8 h-4 bg-[#0097b2] rounded-t-full sm:w-32 sm:h-16" />
            <div className="w-4 h-8 bg-[#ffde59] rounded-r-full sm:w-16 sm:h-32" />
          </div>
        </div>
      </div>
      <TitleProp
        title="SERVICES"
        first_color="#0097b2"
        second_color="#80b26d" />

      <div className="grid grid-rows-3 gap-10 mb-10 sm:pl-0 sm:grid-cols-3 mt-10">
        <ColorTextBox
          title={"DESIGN CONSULTATION"}
          text={"Struggling to make choices in your design, and want support? Resolve all doubts with us!"}
          textpos="right"
          color={"#c3dfb8"}
          imgsrc={"3.jpg"}
          circle_text="MORE INFO"
          circle_color="#ffde59"
          link="design_consultation" />

        <ColorTextBox
          title={"ROOM DESIGN"}
          text={"Wondering how to achieve your style and maximize your space? Let's create your dream home!"}
          textpos="left"
          color={"#fff0b6"}
          imgsrc={"1.jpg"}
          circle_text="MORE INFO"
          circle_color="#0097b2" />

        <ColorTextBox
          title={"ROOM DESIGN - PREMIUM"}
          text={"Not sure where to even start? We'll help you visualize your future home with ease!"}
          textpos="right"
          color={"#acd1d8"}
          imgsrc={"3.jpg"}
          circle_text="MORE INFO"
          circle_color="#80b26d"
          link="room_design_premium" />
      </div>

      <TitleProp
        title="PROJECTS"
        first_color="#80b26d"
        second_color="#ffde59" />
      <div className="mx-5 mt-10">
        <p className="font-bold">Multipurpose bedroom for a busy student</p>
        <p className="text-justify">This small bedroom serves many functions. It's a palce of rest, studying and tutoring, and a music room - all in less than 8m2! We transformed this space to comfortably fit all its needed functions.</p>
      </div>

      <div className="mb-10">
        <Carousel>
          <CarouselItem>
            <Image
              src="/2.jpg"
              width={500}
              height={500}
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/3.jpg"
              width={500}
              height={500}
              alt=""
            />
          </CarouselItem>
        </Carousel>
      </div>

      <div className="grid grid-cols-1 gap-10 mb-10 sm:pl-0 sm:grid-cols-3 mt-10">
        <ColorTextBox
          title={"BUSY STUDENT ROOM"}
          text={"Bedroom, office, and music room - can everything fit comfortably in 8m²"}
          textpos="right"
          color={"#acd1d8"}
          imgsrc={"4.jpg"}
          circle_text="SEE MORE"
          circle_color="#80b26d" />

        <ColorTextBox
          title={"ELEGANT COZY LIVING ROOM"}
          text={"Relaxing and natural feeling, right in the comfort of home. Could it work in your space?"}
          textpos="left"
          color={"#c3dfb8"}
          imgsrc={"8.jpg"}
          circle_text="SEE MORE"
          circle_color="#ffde59" />

        <ColorTextBox
          title={"SOPHISTICATED RECEPTION"}
          text={"Clean and sophisticated, but welcoming reception area. Your guests will feel right at home!"}
          textpos="right"
          color={"#fff0b6"}
          imgsrc={"7.jpeg"}
          circle_text="SEE MORE"
          circle_color="#0097b2" />
      </div>

      <TitleProp
        title="COMMON QUESTIONS"
        first_color="#ffde59"
        second_color="#0097b2" />

      <div className="mb-10 ml-5 mr-5 mt-10">
        <p className="font-bold">Which service should I chose?</p>
        <ul className="list-disc ml-7">
          <li>blablabla</li>
          <li>blablabla</li>
          <li>blablabla</li>
        </ul>
        <p className="font-bold mt-5">What to expect?</p>
        <ul className="list-disc ml-7">
          <li>We'll require pictures of your space, as well as a current floor plan with measurements. Don't worry, this can be a digital drawing, or just sketched by you!</li>
          <li>In the initial videocall, we'll discuss the issues you have in the space, as well as your needs and wants for the design.</li>
          <li>After receiving the design documents via e-mail, you'll have a chance to discuss the designer's choices in a final videocall, and ask for revisions if needed. Or maybe you'll decide you'd like another service too!</li>
        </ul>
      </div>

      <TitleProp
        title="CONTACT US!"
        first_color="#80b26d"
        second_color="#ffde59"
        subtitle="Do you have any questions, or would you like a different service? Let us know!" />
      <div className="mb-10 ml-5 mr-5 mt-10">
        <Form />
      </div>

    </main>
  );
}