import { useContext, useEffect } from "react";
import { NavContext } from "../../_Context";
import ContextProvider from "./_Context";
import Body from "./body/Body";
import Form from "./Form";

const Container = () => {
    const { searchOpen: open, setSearchOpen } = useContext(NavContext);
    const styles = `absolute top-0 z-20 *:mx-auto w-full pt-12 transition-all duration-500 px-[8%] overflow-hidden ${
        open ? "visible opacity-1 h-[70vh]" : "opacity-0 invisible h-[0]"
    }`;
    useEffect(() => {
        const handleCloseOnScroll = () => setSearchOpen(false);
        window.addEventListener("scroll", handleCloseOnScroll);
        return () => window.removeEventListener("scroll", handleCloseOnScroll);
    }, []);

    return (
        <ContextProvider>
            <div className={styles}>
                <Form />
                <Body />
            </div>
        </ContextProvider>
    );
};

export default Container;
