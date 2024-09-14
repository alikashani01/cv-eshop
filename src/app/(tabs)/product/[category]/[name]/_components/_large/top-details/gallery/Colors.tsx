import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

interface Props {
    selectedColor: string;
    onSelect: (value: string) => void;
}

const Colors = ({ selectedColor, onSelect }: Props) => {
    const { colors } = useContext(ProductContext);
    return (
        <ul className="h-14 flex items-center justify-center gap-3">
            {colors?.map((color) => (
                <li key={color.code} onClick={() => onSelect(color.fa)}>
                    <span
                        style={{
                            background: color.code,
                        }}
                        className={`border-2 ${
                            color.fa === selectedColor
                                ? "border-blue"
                                : "border-neutral-100"
                        } block w-[30px] h-[30px] rounded-full`}
                    ></span>
                </li>
            ))}
        </ul>
    );
};

export default Colors;
