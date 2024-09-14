import { useContext } from "react";
import { Context } from "../../Context";

const Disadvantages = () => {
    const { currentReview } = useContext(Context);
    return (
        <ul className="flex flex-col gap-2">
            {currentReview?.disadvantages?.map((item, index) => (
                <li
                    key={index}
                    className="flex items-center gap-[2px] -mr-[6px]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#00d166"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    <p className="text-sm text-neutral-200">{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default Disadvantages;
