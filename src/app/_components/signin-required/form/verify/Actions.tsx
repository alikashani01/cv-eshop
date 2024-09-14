import { useContext } from "react";
import { Context } from "../_Context";
import Resend from "./Resend";
import Image from "next/image";

const Actions = ({ reset }: { reset: () => void }) => {
    const { onSent, mobile } = useContext(Context);
    return (
        <>
            <button
                className="-mr-[3px]"
                onClick={() => {
                    onSent();
                    reset();
                }}
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/arrow/right-b.png"
                    alt=""
                />
                <p className="pt-[3px] text-[1rem] tracking-[1px]">{mobile}</p>
            </button>
            <Resend />
        </>
    );
};

export default Actions;
