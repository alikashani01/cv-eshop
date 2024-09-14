import { useContext } from "react";
import { Context } from "./Item";

const Name = () => {
    const { name } = useContext(Context);
    return (
        <p className="flex items-center justify-center py-2 font-sft tracking-wide text-neutral-600 text-center">
            {name}
        </p>
    );
};

export default Name;
