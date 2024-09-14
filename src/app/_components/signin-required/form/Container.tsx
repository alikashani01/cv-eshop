import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode[] }) => {
    return (
        <div className="w-[300px] !h-[150px] pt-1 flex flex-col items-center justify-center gap-1 mx-auto *:w-full">
            <div className="flex items-center justify-between px-1">
                {children[0]}
            </div>
            <div className="h-[60px] flex flex-col">{children[1]}</div>
            <div className="w-full h-6 flex items-center justify-between px-1">
                {children[2]}
            </div>
        </div>
    );
};

export default Container;
