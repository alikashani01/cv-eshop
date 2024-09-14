import DeleteHistory from "./DeleteHistory";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between h-12 p-4 bg-[#f5f5f755] backdrop-blur-xl shadow-sm shadow-[#aaa5]">
            <p className="text-lg">جستجو</p>
            <DeleteHistory />
        </header>
    );
};

export default Header;
