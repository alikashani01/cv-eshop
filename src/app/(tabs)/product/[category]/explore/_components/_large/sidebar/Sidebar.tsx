import Featured from "./featured/Featured";
import Filters from "../../filters/Filters";

const Sidebar = ({ isCollpased }: { isCollpased: boolean }) => {
    return (
        <div
            className={`no-scrollbar sticky top-12 right-0 h-[calc(100vh-48px)] overflow-x-hidden border-l border-neutral-100 *:pr-2
                ${
                    isCollpased
                        ? "opacity-0 min-w-[0px] max-w-[0px] transition-all duration-700"
                        : "opacity-1 min-w-[280px] max-w-[280px] transition-all duration-700"
                }  
                ${
                    isCollpased
                        ? "translate-x-full  duration-200"
                        : "translate-x-0  duration-200"
                }  
            `}
        >
            <Featured />
            <Filters />
        </div>
    );
};

export default Sidebar;
