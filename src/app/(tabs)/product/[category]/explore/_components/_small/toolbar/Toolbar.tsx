import dynamic from "next/dynamic";
const Sort = dynamic(() => import("../../sort/Sort"), {
    ssr: false,
});
const Filters = dynamic(() => import("./filters/Filters"), {
    ssr: false,
});

const Toolbar = () => {
    return (
        <div className="lg:hidden sticky top-0 z-10 flex justify-between items-center h-10 px-4 bg-[#ffffff55] backdrop-blur-lg border-b border-[#eee5] *:flex *:items-center">
            <Sort />
            <Filters />
        </div>
    );
};

export default Toolbar;
