
interface TitleProps {
    title: string;
    first_color: string;
    second_color: string;
    subtitle?: string;
}

export const TitleProp = ({ title, first_color, second_color, subtitle }: TitleProps) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className={`w-6 h-12 bg-[${first_color}] rounded-l-full flex-shrink-0`}></div>
                <div>
                    <div className={`w-12 h-6 bg-[${second_color}] rounded-b-full`}></div>
                    <div className="ml-2">
                        <h1 className="text-2xl font-extrabold title-service">{title}</h1>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">
                <h2 className="text-[10px]">{subtitle}</h2>
            </div>
        </div>
    );
};

export default TitleProp;