import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-10 h-12 flex items-center justify-between bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link href="list">
                    <Image
                        width={18}
                        height={18}
                        src="/icons/arrow/right-b.png"
                        alt=""
                        priority
                    />
                    <p className="text-sm font-shabt">آدرس‌ها</p>
                </Link>
            </div>
            <div className="justify-center text-neutral-600 text-[.95rem]">
                ویرایش آدرس
            </div>
            <div className="justify-end"></div>
        </header>
    );
};

export default Header;
