const Body = dynamic(() => import("./body/Body"), { ssr: false });
import dynamic from "next/dynamic";
import Header from "./Header";

const Mobile = () => {
    return (
        <section className="py-10 bg-black">
            <Header />
            <Body />
        </section>
    );
};

export default Mobile;
