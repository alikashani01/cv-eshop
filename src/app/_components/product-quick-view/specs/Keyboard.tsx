import { PropsWithChildren, useContext } from "react";
import { Context } from "../ProductQuickView";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Keyboard = () => {
    const {
        specs: { other },
    } = useContext(Context);
    const keyboard = other?.keyboard;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );

    return (
        keyboard?.isExists && (
            <Part>
                <Header title="کیبورد" icon="keyboard" />

                <Container>
                    {keyboard?.type && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{keyboard?.type}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {keyboard?.backlight && (
                        <div>
                            <TitleContainer>
                                <p>نور زمینه</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{keyboard?.backlight}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {keyboard?.numPad && (
                        <div>
                            <TitleContainer>
                                <p>پد اعداد</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{keyboard?.numPad}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {keyboard?.touchId && (
                        <div>
                            <TitleContainer>
                                <p>تاچ آیدی</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{keyboard?.touchId}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {keyboard?.keyTravel && (
                        <div>
                            <TitleContainer>
                                <p>فاصله کلید</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{keyboard?.keyTravel}</p>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Keyboard;
