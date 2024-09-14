import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className="m-auto w-dvw">
            <div className="flex gap-4">{children}</div>
        </div>
    );
}
