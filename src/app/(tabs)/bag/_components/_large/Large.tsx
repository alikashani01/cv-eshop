import List from "../list/List";
import Header from "./Header";

const Large = () => {
    return (
        <div className="hidden lg:block mt-12 px-[5%] lg:px-[8%]">
            <Header />
            <List />
        </div>
    );
};

export default Large;
