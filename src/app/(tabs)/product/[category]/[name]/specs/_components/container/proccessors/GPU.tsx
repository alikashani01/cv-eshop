import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";
import TitleContainer from "../_part/Title";

const GPU = () => {
    const { specs } = useContext(ProductContext);
    if (!specs) return null;
    const { proccessors } = specs;
    if (!proccessors) return null;
    const { gpu } = proccessors;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-[#aaa] font-shabmt">{children}</div>
    );
    return (
        gpu?.isExists && (
            <Part>
                <Header title="پردازنده گرافیکی" subTitle="GPU" icon="gpu" />

                <Container>
                    {gpu?.model && (
                        <div>
                            <TitleContainer>
                                <p>مدل</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{gpu?.model}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {gpu?.manufacturer?.en && (
                        <div>
                            <TitleContainer>
                                <p>سازنده</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{gpu?.manufacturer?.en}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {gpu?.gpuType && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{gpu?.gpuType}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {gpu?.baseClock?.value && (
                        <div>
                            <TitleContainer>
                                <p>فرکانس</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{gpu?.baseClock?.value}</p>
                                <p className="text-sm text-[#aaa]">
                                    {gpu?.baseClock?.unit}
                                </p>
                            </ValueContainer>
                        </div>
                    )}
                    {gpu?.boostClock?.value && (
                        <div>
                            <TitleContainer>
                                <p>سرعت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{gpu?.boostClock?.value}</p>
                                <SubValue>{gpu?.boostClock?.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}

                    {gpu?.threads && (
                        <div>
                            <div className="text-[#bababa] text-[.95rem] min-w-[100px] max-w-[100px]">
                                <p>ترد‌ها</p>
                                <SubValue>Threads</SubValue>
                            </div>
                            <ValueContainer>
                                <p>{gpu?.threads}</p>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default GPU;
