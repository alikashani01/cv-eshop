import { useContext } from "react";
import { Context } from "./Item";
import Image from "next/image";

const Photo = () => {
    const { photo } = useContext(Context);
    return (
        <Image
            width={500}
            height={500}
            src={photo}
            alt=""
            className="w-1/2 h-[120px] object-contain"
        />
    );
};

export default Photo;
