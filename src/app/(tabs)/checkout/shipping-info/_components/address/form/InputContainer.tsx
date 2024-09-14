import { PropsWithChildren } from "react";

const InputContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-center rounded-2xl border border-neutral-700 bg-neutral-800 px-4">
            {children}
        </div>
    );
};

export default InputContainer;
