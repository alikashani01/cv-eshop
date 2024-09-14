import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-10 h-12 flex items-center bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4">
            <p className="justify-center text-neutral-600 ">ذخیره شده‌ها</p>
        </header>
    );
};

export default Header;
