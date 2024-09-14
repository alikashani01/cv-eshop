import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";

const Ports = () => {
    const { specs } = useContext(ProductContext);
    if (!specs) return null;
    const ports = specs?.connectivity?.ports;

    const TitleContainer = ({ children }: PropsWithChildren) => (
        <div className="min-w-[100px] max-w-[100px] text-[.95rem] text-[#cacaca]">
            {children}
        </div>
    );
    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    return (
        ports?.isExists && (
            <Part>
                <Header title="پورت‌ها" icon="port" />
                <Container>
                    {ports?.audio && (
                        <div>
                            <TitleContainer>
                                <p>صدا</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{ports.audio}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.audioJack && (
                        <div>
                            <div className="min-w-[150px] max-w-[150px] text-[.95rem] text-[#cacaca]">
                                <p>جک ۳.۵ میلی‌متری</p>
                            </div>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.audioJack}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.charging && (
                        <div>
                            <TitleContainer>
                                <p>شارژ</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.charging}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.display && (
                        <div>
                            <TitleContainer>
                                <p>نمایشگر</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.display}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.ethernet && (
                        <div>
                            <TitleContainer>
                                <p>اترنت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.ethernet}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.hdmi && (
                        <div>
                            <TitleContainer>
                                <p className="font-sfreg tracking-[1px]">
                                    HDMI
                                </p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.hdmi}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.sdCardReader && (
                        <div>
                            <TitleContainer>
                                <p>کارت مموری</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.sdCardReader}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.thunderbolt && (
                        <div>
                            <TitleContainer>
                                <p>Thunderbolt</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.thunderbolt}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.vga && (
                        <div>
                            <TitleContainer>
                                <p>VGA</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.vga}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.usbA && (
                        <div>
                            <TitleContainer>
                                <p>USB-A</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.usbA}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {ports?.usbC && (
                        <div>
                            <TitleContainer>
                                <p>USB-C</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="flex flex-col text-left">
                                    {ports.usbC}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Ports;
