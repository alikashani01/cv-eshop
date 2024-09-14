import { useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";

const Camera = () => {
    const {
        specs: { camera },
    } = useContext(ProductContext);

    return (
        camera?.isExists && (
            <Part>
                <Header title="دوربین" icon="" />
                <Container>Parts...</Container>
            </Part>
        )
    );
};

export default Camera;
