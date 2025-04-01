import TitleProp from "@/app/ui/titles";
import Header from "@/app/ui/header";
import Image from 'next/image';
import Form from "@/app/ui/form";

export default function DesignConsultation() {
    return (

        <main>
            <Header />
            <div className="mt-10 mb-10">
                <TitleProp
                    title="DESIGN CONSULTATION"
                    first_color="blue"
                    second_color="green" />
            </div>
            <div className="grid grid-cols-12 gap-1 ml-5 mr-10 mb-10 sm:ml-32 sm:mr-32">
                <div className="col-span-9">
                    <div className="mr-5 ml-5 mb-5">
                        <p>
                            You have ideas, but need a little push in the right direction? Maybe you're not sure your vision will turn out how you imagine it? Or you'd like to consult about pet-friendly materials, and durable finishes?
                            Then this is the service for you!
                        </p>
                    </div>
                    <div className="ml-8 mr-5 mb-10">
                        <div>
                            <ul className="list-disc">
                                <li>60 min video call for general advice and suggestions for your space(s).</li>
                                <li>Everything done/shown in the call, will be sent to you via email (quick sketches and moodboards, links viewed together, list of commented materials and finishes, etc.)</li>
                                <li>Additional after-call deliverables are not included.</li>
                            </ul>
                        </div>
                    </div>

                    <Form 
                        subtitle={
                            <>
                                The price of the 60 min consultation with the designer is 40€.<br />
                                You will receive a link via e-mail to schedule the call.<br />
                                You can provide photos, floor plans and additional comments, but it is not necessary.
                            </>
                        }
                    />


                </div>
                <div className="flex items-center justify-center col-span-3">
                    <Image
                        src="/images/8.jpg"
                        alt="Room Design Premium"
                        width={400}
                        height={400}
                        layout="intrinsic"
                        className="mx-auto rounded-xl" />
                </div>
            </div>
        </main>

    );
}