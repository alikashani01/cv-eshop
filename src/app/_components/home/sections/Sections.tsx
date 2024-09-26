import HomePod from "./animations/homepod/HomePod";
import Banners from "./banners/Banners";
import Categories from "./Categories";
// import Discount from "./discount/Discount";
// import Featured from "./featured/Featured";
import Related from "./related/Related";
import Mobile from "./single-product/mobile/Mobile";
// import Tablet from "./single-product/tablet/Tablet";
// import Watch from "./single-product/watch/Watch";
import Skills from "./skills/Skills";
import Today from "./today/Today";

const Sections = () => {
    return (
        <div className="pb-40">
            <Banners />
            <Categories />
            <Today />
            <HomePod />
            <Mobile />
            <Related />
            <Skills />
            {/* <Watch /> */}
            {/* <Discount /> */}
            {/* <Featured /> */}
            {/* <Tablet /> */}
        </div>
    );
};

export default Sections;
