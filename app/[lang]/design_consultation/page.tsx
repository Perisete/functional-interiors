import TitleProp from "@/app/ui/titles";
import Image from "next/legacy/image";
import Form from "@/app/ui/form";
import { getDictionary } from "../dictionaries";

type SupportedLocales = 'en' | 'es' | 'hr';

export default async function DesignConsultation({ params }: { params: { lang: SupportedLocales } }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);
    return (
        <main>
            <div className="my-10">
                <TitleProp
                    title={dict.main.subtitles.services.design_consultation.title}
                    first_color="blue"
                    second_color="green" />
            </div>
            <div className="grid gap-5 grid-cols-1 mx-10
                            sm:mx-40 sm:gap-2 sm:grid-cols-12">
                <div className="sm:col-span-9">
                    <p>
                        {dict.design_consultation.p1}
                    </p>
                    <div className="mx-10 mt-5 sm:mt-10">
                        <ul className="list-disc">
                            <li>{dict.design_consultation.list.li1}</li>
                            <li>{dict.design_consultation.list.li2}</li>
                            <li>{dict.design_consultation.list.li3}</li>
                        </ul>
                    </div>
                </div>

                <div className="justify-self-center sm:col-span-3 sm:justify-self-end">
                    <Image
                        src="/images/8.jpg"
                        alt="Design Consultation"
                        width={260}
                        height={260}
                        layout="intrinsic"
                        className="rounded-xl" />
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
                    submit_color="yellow"
                    dictionary={dict.form}
                />


            </div>
        </main>

    );
}