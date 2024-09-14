import Save from "@/src/app/_components/Save";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Menu from "./menu/Menu";
import Shopping from "./Shopping";
import Specs from "./specs/Specs";

const RightSide = () => {
    const { _id: id } = useContext(ProductContext);
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
                <Menu />
                <Save id={id!} />
            </div>
            <Specs />
            <Shopping />
        </div>
    );
};

export default RightSide;
