import { Reply } from "@/src/queries/question/Entities";
import { createContext } from "react";
import Content from "./Content";
import Header from "./header/Header";

export const ReplyContext = createContext({} as Reply);

const Item = ({ reply }: { reply: Reply }) => {
    return (
        <ReplyContext.Provider value={reply}>
            <li className="py-4 px-6 border-b border-slate-600 last:border-none">
                <Header />
                <Content />
            </li>
        </ReplyContext.Provider>
    );
};

export default Item;
