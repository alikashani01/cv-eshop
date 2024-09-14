import Image from "next/image";

interface Props {
    fa: string;
    en?: string;
    icon: string;
}

const Title = ({ fa, en, icon }: Props) => {
    return (
        <div className="flex items-center gap-3 px-2">
            <Image
                width={20}
                height={20}
                src={icon}
                alt=""
                className="w-6 h-6"
            />
            <div>
                <p className="text-[.92rem] font-shabt text-neutral-500">
                    {fa}
                </p>
                <p className="text-[.8rem] font-sft text-neutral-400 tracking-[2px]">
                    {en}
                </p>
            </div>
        </div>
    );
};

export default Title;
