import { useContext } from "react";
import { Context } from "./Item";
import CloseButton from "@/src/app/_components/_modules/close-button/CloseButton";

const Details = ({ onClose }: { onClose: () => void }) => {
    const { title, content } = useContext(Context);
    return (
        <div className="w-full md:w-[600px] lg:w-[80vw] md:h-[80vh] max-h-[calc(100vh-10px)] overflow-y-auto bg-[#eaeaea] rounded-t-xl md:rounded-2xl">
            <div className="h-[50px] flex items-end px-6">
                <CloseButton onClose={onClose} />
            </div>
            <div className="p-4 px-5 md:px-[8%] pb-20">
                <p className="mb-4 leading-7 text-[#666]">{title}</p>
                <p className="text-[#444] leading-7">{content}</p>
            </div>
            <div className="md:hidden w-full h-[50px] fixed bottom-0 left-0 z-50 flex items-center justify-center">
                <button onClick={onClose} className="h-[20px]">
                    <span className="rotate-[-15deg] mr-[5px] block w-[26px] h-[5px] rounded-[10px] bg-[#555]"></span>
                    <span className="rotate-[15deg] mr-[-5px] block w-[26px] h-[5px] rounded-[10px] bg-[#555]"></span>
                </button>
            </div>
        </div>
    );
};

export default Details;
