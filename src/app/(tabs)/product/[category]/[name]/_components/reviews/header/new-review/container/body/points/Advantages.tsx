import { useContext } from "react";
import { Context } from "../../Context";

const Advantages = () => {
    const {
        data: { advantages },
        handleAdvantage,
    } = useContext(Context);
    return (
        <ul className="grid grid-cols-3 gap-4">
            {advantages.map((item, index) => (
                <li
                    key={index}
                    onClick={() => handleAdvantage(item)}
                    className={`transition duration-300 border
                    ${
                        advantages.includes(item)
                            ? "border-green-600"
                            : "border-neutral-600"
                    }
                    text-center h-12 text-white flex items-center justify-center rounded-xl`}
                >
                    <p>{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default Advantages;
