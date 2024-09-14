import { useContext } from "react";
import { Context } from "./Item";

const Content = () => {
    const { content } = useContext(Context);
    const limitedContent =
        Content?.length! > 300 ? `${content?.slice(0, 300)} ...` : content;
    return (
        <p className="pb-3 px-4 text-neutral-600 font-shabt text-[.9rem] leading-7">
            {limitedContent}
            <span className="text-blue-500 pb-[5px] text-sm">&nbsp; بیشتر</span>
        </p>
    );
};

export default Content;
