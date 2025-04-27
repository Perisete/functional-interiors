import TitleProp from "@/app/ui/titles";
import Image from "next/image";
import Form from "@/app/ui/form";
import { getDictionary } from "../dictionaries";

type SupportedLocales = 'en' | 'es' | 'hr';

export default async function RoomDesign({ params }: { params: { lang: SupportedLocales } }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);
    return (
        <main>
            <div className="my-10">
                <TitleProp
                    title={dict.main.subtitles.services.room_design.title}
                    first_color="yellow"
                    second_color="blue" />
            </div>
            <div className="grid gap-5 grid-cols-1 mx-10
                            sm:mx-40 sm:gap-2 sm:grid-cols-12">
                <div className="sm:col-span-9">
                    <p>
                        {dict.room_design.p1}
                    </p>
                    <div className="mx-10 mt-5 sm:mt-10">
                        <ul className="list-disc">
                            <li>{dict.room_design.list.li1}</li>
                            <li>{dict.room_design.list.li2}</li>
                            <li>{dict.room_design.list.li3}</li>
                        </ul>
                    </div>
                </div>

                <div className="justify-self-center sm:col-span-3 sm:justify-self-end">
                    <Image
                        src="/images/8.jpg"
                        alt="Room Design"
                        width={260}
                        height={260}
                        className="rounded-xl"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>
            <div className="mx-10 my-10">

                <Form
                    subtitle={
                        <>
                            {dict.design_consultation.form.subtitle.li1}<br />
                            {dict.design_consultation.form.subtitle.li2}<br />
                            {dict.design_consultation.form.subtitle.li3}
                        </>
                    }
                    submit_color="green"
                    file_color="yellow"
                    dictionary={dict.form}
                />


            </div>
        </main>
    );
}