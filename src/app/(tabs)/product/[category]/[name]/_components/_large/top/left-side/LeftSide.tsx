import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";
import RatingContainer from "./Rating";

const LeftSide = () => {
    const { cover, name } = useContext(ProductContext);
    return (
        <div className="flex items-center gap-4">
            <div>
                <p className="text-left text-xl font-sfl text-neutral-600">
                    {name.en}
                </p>
                <RatingContainer />
            </div>
            <Image
                width={500}
                height={500}
                src={cover[0]}
                alt=""
                className="w-[60px] h-[55px] object-contain"
            />
        </div>
    );
};

export default LeftSide;
