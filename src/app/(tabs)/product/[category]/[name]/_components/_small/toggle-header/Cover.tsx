import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";

const Cover = () => {
    const { cover } = useContext(ProductContext);
    return (
        <div className="justify-center">
            <Image
                width={100}
                height={100}
                src={cover[0] || ""}
                alt=""
                priority
                className="object-contain w-[40px] h-[40px]"
            />
        </div>
    );
};

export default Cover;
