import Image from "next/image";

interface Props {
    icon: string;
    title: string;
    subTitle?: string;
}

const Header = ({ icon, title, subTitle }: Props) => {
    return (
        <div className="h-14 sticky top-0 z-20 border-b border-neutral-200 bg-[#f5f5f5] backdrop-blur-xl flex items-center gap-2 *:flex *:items-center px-4">
            <Image
                width={1000}
                height={1000}
                src={`/icons/product/${icon}.png`}
                alt=""
                className="w-[40px] h-[40px] object-contain"
            />
            <div className="flex-col !items-start">
                <p className="font-shabb text-neutral-500">{title}</p>
                <p className="-mt-[2px] tracking-[1px] text-sm text-neutral-500 font-sft">
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default Header;
