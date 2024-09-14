import { useContext } from "react";
import { Context } from "../Item";
import CreatedAt from "./CreatedAt";
import Delete from "./Delete";

const Footer = () => {
    const review = useContext(Context);
    return (
        <div className="h-10 px-4 border-t border-neutral-100 flex items-center justify-between">
            <Delete />
            <CreatedAt createdAt={review.createdAt!} />
        </div>
    );
};

export default Footer;
