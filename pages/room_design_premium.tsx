import TitleProp from "@/app/[lang]/titles";
import Header from "@/app/ui/header";
import Image from "next/legacy/image";

export default function RoomDesignPremium() {
    return (

        <main>
            <Header />
            <div className="mt-10 mb-10">
                <TitleProp
                    title="ROOM DESIGN - PREMIUM"
                    first_color="#80b26d"
                    second_color="#ffde59" />
            </div>
            <div className="mr-5 ml-5 mb-5">
                <p>
                    Unsure where to begin, what furniture will fit in your room and your style? Do you want to easily visualize how your space will look and feel when it’s done?
                    If you want the full experience, this service is for you!
                </p>
            </div>
            <div className="grid grid-cols-2 gap-3 ml-8 mr-5 mb-10">
                <div>
                    <ul className="list-disc">
                        <li>30 min video call to understand your space, style, and functional needs.</li>
                        <li>Space planning (floor plan with suggested furniture size and placement).</li>
                        <li>A moodboard for the space with client's style (suggested furniture pieces, color palette, materials, finishes, lighting fixtures).</li>
                        <li>3D render (2 images per room) of the space, with agreed furniture, materials and finishes, to help you visualize the design of your space.</li>
                        <li>Taking into account accessibility needs, adaptations for children and pets.</li>
                        <li>Up to 2 revisions.</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/8.jpg"
                        alt="Room Design Premium"
                        width={800}
                        height={800}
                        layout="intrinsic"
                        className="mx-auto rounded-xl" />
                </div>
            </div>
        </main>

    );
}