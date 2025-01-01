
interface TitleProps {
    title: string;
}

export const TitleProp = ({ title }: TitleProps) => {
    return (
        <div className="flex justify-center">
            <div className="w-6 h-12 bg-[#0097b2] rounded-l-full flex-shrink-0"></div>
            <div>
                <div className="w-12 h-6 bg-[#80b26d] rounded-b-full"></div>
                <div className="ml-2">
                    <h1 className="text-2xl font-extrabold title-service">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default TitleProp;