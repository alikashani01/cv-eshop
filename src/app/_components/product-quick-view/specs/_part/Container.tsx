import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
    return (
        <div className="max-w-[400px] px-4 w-full my-1 mx-auto lg:mx-0">
            <div className="my-4 *:flex *:items-center *:justify-between *:px-5 *:lg:px-4 *:rounded-2xl *:p-4 bg-neutral-100 lg:bg-[unset] *:bg-white lg:*:bg-neutral-100 *:my-2 last:*:border-none *:border-b *:border-neutral-100 lg:*:border-none rounded-2xl lg:rounded-none">
                {children}
            </div>
        </div>
    );
};

export default Container;
