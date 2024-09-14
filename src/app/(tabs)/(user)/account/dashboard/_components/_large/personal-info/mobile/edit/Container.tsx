import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode[] }) => {
    return (
        <>
            <div className="h-12 bg-white flex items-center justify-center px-4">
                {children[0]}
            </div>
            <div className="h-[72px]">{children[1]}</div>
            <div className="h-14 bg-white flex items-center justify-between px-4">
                {children[2]}
            </div>
        </>
    );
};

export default Container;
