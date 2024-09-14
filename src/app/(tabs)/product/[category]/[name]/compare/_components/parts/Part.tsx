import { PropsWithChildren, ReactNode } from "react";

interface Props {
    isExist: boolean;
    children: ReactNode;
}

const Part = ({ isExist, children }: Props) => {
    return (
        isExist && (
            <div className="p-2 py-4 border-t border-neutral-200">
                {children}
            </div>
        )
    );
};

export default Part;
