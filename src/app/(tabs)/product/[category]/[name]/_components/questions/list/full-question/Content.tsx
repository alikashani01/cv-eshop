import { useContext } from "react";
import { Context } from "./FullQuestion";

const Content = () => {
    const { content } = useContext(Context);
    return (
        <p className="p-4 px-6 md:px-12 border-b border-slate-700 leading-7 text-neutral-100 text-sm lg:text-[.95rem]">
            {content}
        </p>
    );
};

export default Content;
