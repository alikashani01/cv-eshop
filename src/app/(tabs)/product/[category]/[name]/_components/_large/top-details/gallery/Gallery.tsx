import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../../_Context";
import Colors from "./Colors";
import Photos from "./Photos";

const Gallery = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { colors } = useContext(ProductContext);
    const [selectedColor, setSelectedColor] = useState("");
    useEffect(() => {
        colors && setSelectedColor(colors[0].fa);
    }, [colors]);
    return (
        <div
            ref={ref}
            className="sticky top-20 h-[550px] bg-second-theme rounded-2xl py-4"
        >
            <Photos selectedColor={selectedColor} />
            <Colors
                selectedColor={selectedColor}
                onSelect={(value: string) => setSelectedColor(value)}
            />
        </div>
    );
};

export default Gallery;
