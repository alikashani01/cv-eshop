import { useContext } from "react";
import { Context } from "../../_Context";

const Content = () => {
    const { content } = useContext(Context);
    return (
        <p className="p-3 px-4 bg-second-theme rounded-2xl text-neutral-700 text-[.95rem] leading-7">
            {content}
        </p>
    );
};

export default Content;
