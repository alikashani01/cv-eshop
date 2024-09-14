import LargeScreenContainer from "../../../_components/LargeScreenContainer";
import Categories from "../Categories";
import List from "../list/List";

const Large = () => {
    return (
        <LargeScreenContainer>
            <>
                <p>محصولات ذخیره شده</p>
                <Categories />
                <div />
            </>
            <List />
        </LargeScreenContainer>
    );
};

export default Large;
