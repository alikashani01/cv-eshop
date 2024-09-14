import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../_Context";
import Colors from "./Colors";
import Photos from "./Photos";

const Gallery = ({ onToggle }: { onToggle: (value: boolean) => void }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { colors } = useContext(ProductContext);

    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        colors && setSelectedColor(colors[0].fa);
    }, [colors]);

    useEffect(() => {
        const el = ref.current;
        window.addEventListener("scroll", () => {
            const elementTopHeight = el?.getBoundingClientRect().top || 0;
            elementTopHeight <= 8 ? onToggle(true) : onToggle(false);
        });
    }, [ref.current]);

    return (
        <div ref={ref} className="pb-6">
            <Photos selectedColor={selectedColor} />
            <Colors
                selectedColor={selectedColor}
                onSelect={(value: string) => setSelectedColor(value)}
            />
        </div>
    );
};

export default Gallery;
