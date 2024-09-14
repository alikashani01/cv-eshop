import Body from "./_components/body/Body";
import Footer from "./_components/footer/Footer";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import ContextProvider from "./_Context";

const BuyPage = () => {
    return (
        <ContextProvider>
            <Header />
            <Navigation />
            <Body />
            <Footer />
        </ContextProvider>
    );
};

export default BuyPage;
