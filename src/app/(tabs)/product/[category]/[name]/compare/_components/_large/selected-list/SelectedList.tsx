import CompareList from "./CompareList";
import MainProduct from "./MainProduct";

const SelectedList = () => {
    return (
        <div className="flex flex-grow bg-second-theme rounded-xl sticky top-4">
            {/* <MainProduct /> */}
            <CompareList />
        </div>
    );
};

export default SelectedList;
