import { useContext, useState } from "react";
import { Context } from "../ProductQuickView";
import Colors from "./Colors";
import Photos from "./Photos";

const Gallery = () => {
    const { colors } = useContext(Context);
    const [selectedColor, setSelectedColor] = useState(colors[0].fa);
    return (
        <div className="border-b md:border-none border-[#e1e1e1aa] pt-2">
            <Photos selectedColor={selectedColor} />
            <Colors
                selectedColor={selectedColor}
                onSelectColor={(color) => setSelectedColor(color)}
            />
        </div>
    );
};

export default Gallery;
