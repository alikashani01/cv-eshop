import List from "../list/List";
import Header from "./Header";

const Small = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <List />
        </div>
    );
};

export default Small;
