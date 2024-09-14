import { PropsWithChildren } from "react";

const TitleContainer = ({ children }: PropsWithChildren) => (
    <div className="min-w-[100px] max-w-[100px] text-[.9rem] text-neutral-600 *:font-shabt">
        {children}
    </div>
);

export default TitleContainer;
