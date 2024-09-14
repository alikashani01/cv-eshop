import List from "../list/List";
import Statuses from "../Statuses";
import Header from "./header/Header";

const Small = () => {
    return (
        <div className="lg:hidden pt-12">
            <Header />
            <Statuses />
            <List />
        </div>
    );
};

export default Small;
