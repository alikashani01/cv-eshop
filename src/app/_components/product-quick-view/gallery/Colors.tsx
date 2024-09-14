import { useContext } from "react";
import { Context } from "../ProductQuickView";

interface Props {
    selectedColor: string;
    onSelectColor: (value: string) => void;
}

const Colors = ({ selectedColor, onSelectColor }: Props) => {
    const { colors } = useContext(Context);
    return (
        <ul className="flex items-center justify-center gap-4 py-2 pb-4">
            {colors.map((color) => (
                <li key={color.code}>
                    <div
                        className={`w-[30px] h-[30px] rounded-full border-2 ${
                            selectedColor === color.fa
                                ? "border-[#007aff]"
                                : "border-[#333]"
                        }`}
                        style={{ background: color.code }}
                        onClick={() => onSelectColor(color.fa)}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Colors;
