import Categories from "../Categories";
import List from "../list/List";
import Header from "./Header";

const Small = () => {
    return (
        <div className="md:hidden">
            <Header />
            <Categories />
            <List />
        </div>
    );
};

export default Small;
