import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode[] }) => {
    return (
        <div className="flex flex-col items-center gap-0 *:w-full w-full max-w-[360px] p-4 mx-auto">
            <div className="flex flex-col justify-end gap-1 h-[70px] px-1">
                {children[0]}
                <p className="text-rose-500 text-[.82rem] font-shabt">
                    {children[1]}
                </p>
            </div>

            <div className="h-[70px] mt-1">{children[2]}</div>

            <div className="flex items-center justify-between h-[70px] mt-1">
                {children[3]}
            </div>
        </div>
    );
};

export default Container;
