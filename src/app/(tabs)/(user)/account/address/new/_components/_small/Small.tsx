import Form from "./form/Form";
import ContextProvider from "./_Context";
import Header from "./Header";

const Small = () => {
    return (
        <ContextProvider>
            <div className="md:hidden">
                <Header />
                <Form />
            </div>
        </ContextProvider>
    );
};

export default Small;
