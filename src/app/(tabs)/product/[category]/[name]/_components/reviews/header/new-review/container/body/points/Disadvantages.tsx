import { useContext } from "react";
import { Context } from "../../Context";

const Disadvantages = () => {
    const {
        data: { disadvantages },
        handleAdvantage,
    } = useContext(Context);
    return (
        <ul className="grid grid-cols-3 gap-4">
            {disadvantages.map((item, index) => (
                <li
                    key={index}
                    onClick={() => handleAdvantage(item)}
                    className={`transition duration-300 border
                    ${
                        disadvantages.includes(item)
                            ? "border-rose-600"
                            : "border-neutral-700"
                    }
                text-center h-12 text-white border-neutral-200 flex items-center justify-center rounded-xl`}
                >
                    <p>{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default Disadvantages;
