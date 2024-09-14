interface Props {
    nameEn: string;
    nameFa: string;
}
const Name = ({ nameEn, nameFa }: Props) => {
    return (
        <div className="w-full h-24 flex flex-col items-center justify-center">
            <p className="ltr w-full text-center overflow-hidden text-ellipsis text-neutral-600 font-sfl tracking-[.3px]">
                {nameEn}
            </p>
        </div>
    );
};

export default Name;
