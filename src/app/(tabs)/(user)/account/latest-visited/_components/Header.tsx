import dynamic from "next/dynamic";
const MenuContainer = dynamic(() => import("./Menu"), { ssr: false });

const Header = () => {
    return (
        <header className="w-full h-12 flex items-center justify-between px-4 shadow-sm shadow-[#aaa5]">
            <p>بازدیدهای اخیر</p>
            <MenuContainer />
        </header>
    );
};

export default Header;
