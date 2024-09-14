import { useContext } from "react";
import { Context } from "../Context";

const Title = () => {
    const { currentReview } = useContext(Context);
    return (
        <p className="leading-7 md:leading-8 text-lg md:text-xl text-neutral-100">
            {currentReview?.title}
        </p>
    );
};

export default Title;
