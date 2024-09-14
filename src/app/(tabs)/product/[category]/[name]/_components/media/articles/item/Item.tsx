import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Image from "next/image";
import { createContext, useState } from "react";
import Details from "./Details";

interface Props {
    title?: string | undefined;
    content?: string | undefined;
    photo?: string | undefined;
    source?: string | undefined;
}

export const Context = createContext({} as Props);

const Item = ({ article }: { article: Props }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const limitedTitle =
        article.title?.length! >= 80 && `${article.title?.slice(0, 80)} ...`;
    return (
        <Context.Provider value={article}>
            <li
                className="h-[300px] w-full bg-second-theme rounded-xl overflow-hidden"
                onClick={handleOpen}
            >
                <Image
                    width={1000}
                    height={1000}
                    src={article.photo || ""}
                    alt={article.title || ""}
                    className="w-[100%] h-[200px] object-cover"
                />
                <p className="p-2 px-4 text-[.9rem] leading-7 h-[100px] flex items-center">
                    {limitedTitle || article.title}
                </p>
            </li>
            <Backdrop isOpen={open} onClose={handleOpen}>
                <Details onClose={handleOpen} />
            </Backdrop>
        </Context.Provider>
    );
};

export default Item;
