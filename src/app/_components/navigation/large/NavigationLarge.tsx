import ContextProvider from "./_Context";
import Container from "./container/Container";

const NavigationLarge = () => {
    return (
        <ContextProvider>
            <Container />
        </ContextProvider>
    );
};

export default NavigationLarge;
