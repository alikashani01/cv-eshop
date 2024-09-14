const Header = ({ title }: { title: string }) => {
    return (
        <p className="px-5 lg:px-[8%] mb-2 text-lg text-neutral-600 font-shabb">
            {title}
        </p>
    );
};

export default Header;
