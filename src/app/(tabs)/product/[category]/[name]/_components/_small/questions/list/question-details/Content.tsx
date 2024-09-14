import { useContext } from "react";
import { Context } from "./Details";

const Content = () => {
    const { content } = useContext(Context);
    return (
        <p className="pt-4 lg:pt-0 px-6 text-neutral-700 text-sm lg:text-[.95rem] leading-7">
            {content}
        </p>
    );
};

export default Content;
