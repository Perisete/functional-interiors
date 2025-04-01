
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
                <div className={`w-6 h-12 bg-brand-${first_color} rounded-l-full flex-shrink-0`}></div>
                <div>
                    <div className={`w-12 h-6 bg-brand-${second_color} rounded-b-full`}></div>
                    <div className="ml-2">
                        <h2 className="text-2xl font-extrabold title-service">{title}</h2>
                    </div>
                </div>
            </div>
            <div className="justify-self-center ml-10 mr-10">
                <h3 className="text-center">{subtitle}</h3>
            </div>
        </div>
    );
};

export default TitleProp;