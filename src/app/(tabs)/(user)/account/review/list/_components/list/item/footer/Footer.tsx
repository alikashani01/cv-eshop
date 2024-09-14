import { useContext } from "react";
import { Context } from "../Item";
import CreatedAt from "./CreatedAt";
import Delete from "./Delete";
import RepliesLink from "./RepliesLink";

const Footer = () => {
    const review = useContext(Context);
    return (
        <div className="h-10 px-4 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Delete />
                {/* <RepliesLink /> */}
            </div>
            <CreatedAt createdAt={review.createdAt!} />
        </div>
    );
};

export default Footer;
