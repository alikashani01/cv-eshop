import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full px-4 my-1 mx-auto md:mx-0">
            <div className="my-4 *:flex *:items-center *:justify-between *:px-6 *:py-4 *:bg-white *:rounded-2xl *:my-2">
                {children}
            </div>
        </div>
    );
};

export default Container;
