import List from "../list/List";
import Header from "./header/Header";
import SelectedList from "./selected-list/SelectedList";

const Large = () => {
    return (
        <div className="hidden lg:block">
            <Header />
            <div className="flex gap-4 px-[5%] lg:px-[8%] py-4 relative">
                <List />
                <SelectedList />
            </div>
        </div>
    );
};

export default Large;
