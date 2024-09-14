import { useContext } from "react";
import { Context } from "../_Context";
import Resend from "./Resend";
import Image from "next/image";

const Actions = ({ reset }: { reset: () => void }) => {
    const { onSent, mobile } = useContext(Context);
    return (
        <>
            <button
                className="-mr-[3px] mb-[2px]"
                onClick={() => {
                    onSent();
                    reset();
                }}
            >
                <Image
                    width={16}
                    height={16}
                    src="/icons/arrow/right-b.png"
                    alt=""
                />
                <p className="pt-[3px] text-[.95rem] tracking-[1.5px]">
                    {mobile}
                </p>
            </button>
            <Resend />
        </>
    );
};

export default Actions;
