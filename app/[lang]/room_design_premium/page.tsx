import TitleProp from "@/app/ui/titles";
import Image from "next/image";
import Form from "@/app/ui/form";
import { getDictionary } from "../dictionaries";

type SupportedLocales = 'en' | 'es' | 'hr';

export default async function RoomDesignPremium({ params }: { params: { lang: SupportedLocales } }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);
    return (
        <main>
            <div className="my-10">
                <TitleProp
                    title={dict.main.subtitles.services.room_design_premium.title}
                    first_color="green"
                    second_color="yellow" />
            </div>
            <div className="grid gap-5 grid-cols-1 mx-10
                            sm:mx-40 sm:gap-2 sm:grid-cols-12">
                <div className="sm:col-span-9">
                    <p>
                        {dict.room_design_premium.p1}
                    </p>
                    <div className="mx-10 mt-5 sm:mt-10">
                        <ul className="list-disc">
                            <li>{dict.room_design_premium.list.li1}</li>
                            <li>{dict.room_design_premium.list.li2}</li>
                            <li>{dict.room_design_premium.list.li3}</li>
                            <li>{dict.room_design_premium.list.li4}</li>
                            <li>{dict.room_design_premium.list.li5}</li>
                            <li>{dict.room_design_premium.list.li6}</li>
                        </ul>
                    </div>
                </div>

                <div className="justify-self-center sm:col-span-3 sm:justify-self-end">
                    <Image
                        src="/images/1.jpg"
                        alt="Room Design"
                        width={300}
                        height={300}
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
                            {dict.room_design_premium.form.subtitle.li1}<br />
                            {dict.room_design_premium.form.subtitle.li2}<br />
                            {dict.room_design_premium.form.subtitle.li3}
                        </>
                    }
                    file_color="green"
                    submit_color="blue"
                    dictionary={dict.form}
                />


            </div>
        </main>
    );
}