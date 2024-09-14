import { useContext } from "react";
import { ReplyContext } from "./Item";

const Content = () => {
    const { content } = useContext(ReplyContext);
    return (
        <p className="mt-[6px] text-[.9rem] text-neutral-50 font-shabt leading-[26px]">
            {content}
        </p>
    );
};

export default Content;
