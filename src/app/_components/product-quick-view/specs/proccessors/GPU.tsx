import { PropsWithChildren, useContext } from "react";
import { Context } from "../../ProductQuickView";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";
import TitleContainer from "../_part/Title";

const GPU = () => {
    const { specs } = useContext(Context);
    if (!specs) return null;
    const { proccessors } = specs;
    if (!proccessors) return null;
    const { gpu } = proccessors;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px] text-[1.06rem]">
            {children}
        </div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-neutral-500 font-shabt">
            {children}
        </div>
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
                                <p className="text-[.8rem] text-neutral-500 font-shabt">
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
                            <div className="text-[.95rem] min-w-[100px] max-w-[100px]">
                                <p className="text-neutral-600 font-shabt">
                                    ترد‌ها
                                </p>
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
