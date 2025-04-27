import TitleProp from "../ui/titles";
import ColorTextBox from "../ui/color_text_box";
import Form from "../ui/form";
import { getDictionary } from "./dictionaries";

type SupportedLocales = 'en' | 'es' | 'hr';

export default async function Home({ params }: { params: { lang: SupportedLocales } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return (
    <div>
      <div className="pl-3 pr-3 pb-10">
        <div className="grid grid-cols-3 justify-between gap-2 mb-10">
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/images/1.jpg" alt="" />
          </div>
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/images/2.jpg" alt="" />
          </div>
          <div className="col-span-1">
            <img className="object-cover h-full w-full" src="/images/3.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center justify-items-center sm:px-24">
          <div className="col-span-1 w-8 h-16 bg-brand-green rounded-l-full 
          sm:h-36 sm:w-20" />
          <div className="text-[#4e5152] text-[21px] col-span-10 pl-2 
          sm:text-7xl">
            <h1>{dict.main.title.firstLine}</h1>
            <h1>{dict.main.title.secondLine}</h1>
            <h1>{dict.main.title.thirdLine}</h1>
          </div>
          <div className="col-span-1 flex flex-row items-end justify-end self-end relative bottom-2 right-4">
            <div className="w-8 h-4 bg-brand-blue rounded-t-full sm:w-32 sm:h-16" />
            <div className="w-4 h-8 bg-brand-yellow rounded-r-full sm:w-16 sm:h-32" />
          </div>
        </div>
      </div>
      <div className="sm:mx-20">
        <TitleProp
          title={dict.main.subtitles.services.title}
          first_color="blue"
          second_color="green" />

        <div className="grid grid-rows-3 gap-10 mb-10 mt-10
                        sm:pl-0 sm:grid-cols-3 sm:grid-rows-1">
          <ColorTextBox
            title={dict.main.subtitles.services.design_consultation.title}
            text={dict.main.subtitles.services.design_consultation.description}
            textpos="right"
            color={"lightgreen"}
            imgsrc={"images/3.jpg"}
            circle_text={dict.buttons.more_info}
            circle_color="yellow"
            link={lang + "/design_consultation"} />

          <ColorTextBox
            title={dict.main.subtitles.services.room_design.title}
            text={dict.main.subtitles.services.room_design.description}
            textpos="left"
            color={"lightyellow"}
            imgsrc={"images/1.jpg"}
            circle_text={dict.buttons.more_info}
            circle_color="blue"
            link={lang + "/room_design"} />

          <ColorTextBox
            title={dict.main.subtitles.services.room_design_premium.title}
            text={dict.main.subtitles.services.room_design_premium.description}
            textpos="right"
            color={"lightblue"}
            imgsrc={"images/3.jpg"}
            circle_text={dict.buttons.more_info}
            circle_color="green"
            link="room_design_premium" />
        </div>

        <TitleProp
          title={dict.main.subtitles.projects.title}
          first_color="green"
          second_color="yellow" />

        {/* <div className="mx-5 mt-10">
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
        </div> */}

        <div className="grid grid-cols-1 gap-10 mb-10 sm:pl-0 sm:grid-cols-3 mt-10">
          <ColorTextBox
            title={dict.main.subtitles.projects.busy_student_room.title}
            text={dict.main.subtitles.projects.busy_student_room.description}
            textpos="right"
            color={"lightblue"}
            imgsrc={"images/4.jpg"}
            circle_text={dict.buttons.see_more}
            circle_color="green" />

          <ColorTextBox
            title={dict.main.subtitles.projects.elegant_living_room.title}
            text={dict.main.subtitles.projects.elegant_living_room.description}
            textpos="left"
            color={"lightgreen"}
            imgsrc={"images/8.jpg"}
            circle_text={dict.buttons.see_more}
            circle_color="yellow" />

          <ColorTextBox
            title={dict.main.subtitles.projects.sophisticated_reception.title}
            text={dict.main.subtitles.projects.sophisticated_reception.description}
            textpos="right"
            color={"lightyellow"}
            imgsrc={"images/7.jpeg"}
            circle_text={dict.buttons.see_more}
            circle_color="blue" />
        </div>

        <TitleProp
          title={dict.main.subtitles.common_questions.title}
          first_color="yellow"
          second_color="blue" />

        <div className="mb-10 ml-5 mr-5 mt-10">
          <p className="font-bold">{dict.main.subtitles.common_questions.subtitle1.title}</p>
          <ul className="list-disc ml-7">
            <li>{dict.main.subtitles.common_questions.subtitle1.li1}</li>
            <li>{dict.main.subtitles.common_questions.subtitle1.li2}</li>
            <li>{dict.main.subtitles.common_questions.subtitle1.li3}</li>
          </ul>
          <p className="font-bold mt-5">{dict.main.subtitles.common_questions.subtitle2.title}</p>
          <ul className="list-disc ml-7">
            <li>{dict.main.subtitles.common_questions.subtitle2.li1}</li>
            <li>{dict.main.subtitles.common_questions.subtitle2.li2}</li>
            <li>{dict.main.subtitles.common_questions.subtitle2.li3}</li>
          </ul>
        </div>

        <TitleProp
          title={dict.main.subtitles.contact_us.title}
          first_color="green"
          second_color="yellow"
          subtitle={dict.main.subtitles.contact_us.subtitle} />
        <div className="mb-10 ml-5 mr-5 mt-10">
          <Form 
          dictionary={dict.form}
          file_color="green"
          />
        </div>
      </div>
    </div>
  );
}