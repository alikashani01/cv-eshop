import { useContext } from "react";
import { NavContext } from "../../_Context";
import Backdrop from "../../Backdrop";
import { laptopBrands } from "./_data/brands";
import { laptopProccessors } from "./_data/proccessor";
import { laptopSubCategories } from "./_data/subCategories";
import Container from "./_templates/Container";
import Title from "./_templates/Title";

const Mobile = () => {
    const { onOpenCategory, categoryOpen } = useContext(NavContext);
    const handleOpen = () => onOpenCategory("موبایل");
    const handleClose = () => onOpenCategory("");
    return (
        <>
            <Title title="موبایل" href="mobile" />
            <Backdrop
                open={categoryOpen === "موبایل" ? true : false}
                onClose={() => onOpenCategory("")}
            >
                <div
                    className={`absolute bg-[#333] w-full grid grid-cols-2 lg:grid-cols-5 py-16 transition-all duration-500 px-[8%] overflow-y-auto no-scrollbar ${
                        categoryOpen === "موبایل"
                            ? "visible opacity-1 h-[80vh]"
                            : "opacity-0 invisible h-[0]"
                    }`}
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                >
                    <Container
                        category="mobile"
                        query="brand"
                        title="برندها"
                        options={laptopBrands}
                    />
                    <Container
                        category="mobile"
                        query="application"
                        title="انواع"
                        options={laptopSubCategories}
                    />
                    <Container
                        category="mobile"
                        query="cpu"
                        title="پردازنده‌ها"
                        options={laptopProccessors}
                    />
                </div>
            </Backdrop>
        </>
    );
};

export default Mobile;
