import { useContext } from "react";
import { Context } from "../../../_Context";
import Add from "./Add";
import Remove from "./Remove";

const Actions = () => {
    const { itemExists } = useContext(Context);
    return (
        <div className="h-[55px] py-1 md:flex">
            {itemExists ? <Remove /> : <Add />}
        </div>
    );
};

export default Actions;
