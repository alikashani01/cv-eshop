import { useContext } from "react";
import { Context } from "./Item";

const Content = () => {
    const { content } = useContext(Context);
    const limitedContent =
        Content?.length! > 200 ? `${content?.slice(0, 200)} ...` : content;
    return (
        <p className="h-36 pb-3 px-4 overflow-hidden text-neutral-600 font-shabt text-[.85rem] leading-[26px]">
            {limitedContent}
            <span className="text-blue-500 pb-[5px] text-sm">&nbsp; بیشتر</span>
        </p>
    );
};

export default Content;
