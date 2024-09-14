import { useContext } from "react";
import { Context } from "./Item";

const Title = () => {
    const { title } = useContext(Context);
    return (
        <p className="w-full py-1 px-4 overflow-hidden text-ellipsis text-nowrap text-neutral-700 text-[.95rem] leading-7">
            {title}
        </p>
    );
};

export default Title;
