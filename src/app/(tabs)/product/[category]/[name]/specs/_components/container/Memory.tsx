import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Memory = () => {
    const {
        specs: { memory },
    } = useContext(ProductContext);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-[#aaa] font-shabt">{children}</div>
    );

    return (
        memory?.isExists && (
            <Part>
                <Header title="حافظه" icon="memory" />

                <Container>
                    {memory?.ram?.capacity && (
                        <div>
                            <TitleContainer>
                                <p>ظرفیت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{memory?.ram?.capacity}</p>
                                <SubValue>گیگ</SubValue>
                            </ValueContainer>
                        </div>
                    )}

                    {memory?.ram?.ramType && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{memory?.ram?.ramType}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {memory?.ram?.clock?.value && (
                        <div>
                            <TitleContainer>
                                <p>سرعت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{memory?.ram?.clock?.value}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {memory?.ram?.upgradable && (
                        <div>
                            <TitleContainer>
                                <p>قابلیت ارتقاع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{memory?.ram?.upgradable}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {memory?.cache && (
                        <div>
                            <TitleContainer>
                                <p>کش</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{memory?.cache}</p>
                                <SubValue>مگابایت</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Memory;
