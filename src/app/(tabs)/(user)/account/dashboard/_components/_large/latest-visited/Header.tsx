import dynamic from "next/dynamic";
const MenuContainer = dynamic(() => import("./Menu"), { ssr: false });

const Header = () => {
    return (
        <header className="w-full h-14 flex items-center justify-between px-6 border-b border-neutral-100">
            <p>بازدیدهای اخیر</p>
            <MenuContainer />
        </header>
    );
};

export default Header;
