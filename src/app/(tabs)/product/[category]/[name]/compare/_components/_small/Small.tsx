import List from "../list/List";
import Footer from "./Footer";
import Header from "./Header";
import SelectedList from "./selected-list/SelectedList";
import SubHeader from "./sub-header/SubHeader";

const Small = () => {
    return (
        <div className="lg:hidden">
            <Header />
            <SubHeader />
            <List />
            <SelectedList />
            <Footer />
        </div>
    );
};

export default Small;
