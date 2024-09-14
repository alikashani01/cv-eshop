import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";
import TitleContainer from "../_part/Title";

const CPU = () => {
    const { specs } = useContext(ProductContext);
    if (!specs) return null;
    const { proccessors } = specs;
    if (!proccessors) return null;
    const { cpu, chipset } = proccessors;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-neutral-500 font-shabt font-shabmt">
            {children}
        </div>
    );
    return (
        cpu?.isExists && (
            <Part>
                <Header title="پردازنده مرکزی" subTitle="CPU" icon="cpu" />

                <Container>
                    {cpu?.model && (
                        <div>
                            <TitleContainer>
                                <p>مدل</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{cpu?.model}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {cpu?.manufacturer?.en && (
                        <div>
                            <TitleContainer>
                                <p>سازنده</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{cpu?.manufacturer?.en}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {cpu?.baseFrequency?.value && (
                        <div>
                            <TitleContainer>
                                <p>فرکانس</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{cpu?.baseFrequency?.value}</p>
                                <p className="text-sm text-neutral-500 font-shabt">
                                    {cpu?.baseFrequency?.unit}
                                </p>
                            </ValueContainer>
                        </div>
                    )}
                    {cpu?.speedRange?.value && (
                        <div>
                            <TitleContainer>
                                <p>سرعت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{cpu?.speedRange?.value}</p>
                                <SubValue>{cpu?.speedRange?.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {cpu?.cores?.value && (
                        <div>
                            <TitleContainer>
                                <p>هسته‌ها</p>
                            </TitleContainer>
                            <div className="flex flex-col">
                                <p>{cpu?.cores?.value}</p>
                                <p className="text-sm text-neutral-500 font-shabt">
                                    {cpu?.cores.description}
                                </p>
                            </div>
                        </div>
                    )}
                    {cpu?.threads && (
                        <div>
                            <div className="text-[#bababa] text-[.95rem] min-w-[100px] max-w-[100px]">
                                <p>ترد‌ها</p>
                                <SubValue>Threads</SubValue>
                            </div>
                            <ValueContainer>
                                <p>{cpu?.threads}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {chipset && (
                        <div>
                            <div className="text-neutral-600 text-[.95rem]  min-w-[100px] max-w-[100px]">
                                <p className="font-shabt">تراشه</p>
                                <SubValue>Chipset</SubValue>
                            </div>
                            <ValueContainer>
                                <p>{chipset}</p>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default CPU;
