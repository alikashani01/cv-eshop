import { PropsWithChildren } from "react";
import ContextProvider from "./_Context";

const ProductDetailsLayout = ({ children }: PropsWithChildren) => {
    return <ContextProvider>{children}</ContextProvider>;
};

export default ProductDetailsLayout;
