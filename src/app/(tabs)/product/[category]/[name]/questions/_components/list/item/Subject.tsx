import { useContext } from "react";
import { Context } from "./Item";

const Subject = () => {
    const { subject } = useContext(Context);
    return (
        <p className="py-1 px-4 text-neutral-700 text-[.95rem] leading-7">
            {subject}
        </p>
    );
};

export default Subject;
