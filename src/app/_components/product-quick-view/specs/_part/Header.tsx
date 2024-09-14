import Image from "next/image";

interface Props {
    icon: string;
    title: string;
    subTitle?: string;
}

const Header = ({ icon, title, subTitle }: Props) => {
    return (
        <div className="h-14 sticky top-0 border-b border-neutral-100 bg-[#f5f5f555] lg:bg-white backdrop-blur-xl z-50 lg:backdrop-blur-0 flex items-center gap-2 *:flex *:items-center px-4">
            <Image
                width={1000}
                height={1000}
                src={`/icons/product/${icon}.png`}
                alt=""
                className="w-[40px] h-[40px] object-contain"
            />
            <div className="flex-col !items-start">
                <p className="font-shabb text-neutral-500">{title}</p>
                <p className="-mt-[1px] tracking-[1px] text-sm text-neutral-500 font-sft">
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default Header;
