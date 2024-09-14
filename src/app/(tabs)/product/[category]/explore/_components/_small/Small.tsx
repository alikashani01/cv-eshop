import List from "../list/List";
import Header from "./Header";
import Toolbar from "./toolbar/Toolbar";

const Small = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <Toolbar />
            <List />
        </div>
    );
};

export default Small;
