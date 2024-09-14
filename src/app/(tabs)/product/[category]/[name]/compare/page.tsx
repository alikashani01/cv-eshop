import ContextProvider from "./_Context";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

const ComparePage = () => {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
};

export default ComparePage;
