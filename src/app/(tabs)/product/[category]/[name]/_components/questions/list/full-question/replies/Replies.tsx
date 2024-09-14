import { useContext } from "react";
import { Context } from "../FullQuestion";
import List from "./list/List";

const Replies = () => {
    const { replies } = useContext(Context);
    return (
        <div className="pt-3 pb-16 lg:pb-4">
            <p className="px-6 md:px-12 text-[.9rem] text-neutral-200 font-shabt">
                {replies?.length === 0 ? "بدون پاسخ" : "پاسخ‌ها"}
            </p>
            <List />
        </div>
    );
};

export default Replies;
