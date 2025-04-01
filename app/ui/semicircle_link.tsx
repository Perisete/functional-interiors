import Link from 'next/link'

interface SemicircleLinkProps {
    link: string,
    circle_text: string,
    circle_color: string,
    position?: string
}

export const SemicircleLink = ({
    link,
    circle_text,
    circle_color,
    position = "center"
}: SemicircleLinkProps) => (
    <div className={`bg-brand-${circle_color} mt-1 w-20 h-10 px-4 rounded-b-full flex
        ${position === "left" ? "ml-6" : position === "center" ? "mx-auto" : "right-0"}`}>
    <Link href={`${link}`} className={`text-[10px] 
        font-bold text-center w-full h-full rounded-b-full
        flex items-center justify-center`}>
        {circle_text}
    </Link>
</div>
)