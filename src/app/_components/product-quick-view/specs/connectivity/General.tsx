import { PropsWithChildren, useContext } from "react";
import { Context } from "../../ProductQuickView";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";
import TitleContainer from "../_part/Title";

const General = () => {
    const { specs } = useContext(Context);
    const connectivity = specs?.connectivity;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-sm text-[#aaa] font-shabmt">{children}</div>
    );

    return (
        connectivity?.isExists && (
            <Part>
                <Header title="اتصالات" icon="connection" />

                <Container>
                    {connectivity?.connections?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>اتصالات</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {connectivity?.connections?.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                            >
                                                <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                    {item}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.bluetooth?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>بلوتوث</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {connectivity?.bluetooth?.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                            >
                                                <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                    {item}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.bluetoothVersion && (
                        <div>
                            <TitleContainer>
                                <p>نسخه‌ی بلوتوث</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{connectivity.bluetoothVersion}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.fingerprint && (
                        <div>
                            <TitleContainer>
                                <p>اثرانگشت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{connectivity.fingerprint}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.nfc && (
                        <div>
                            <TitleContainer>
                                <p>NFC</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{connectivity.nfc}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.opticalDriver && (
                        <div>
                            <TitleContainer>
                                <p>درایو نوری</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{connectivity.opticalDriver}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.radio && (
                        <div>
                            <TitleContainer>
                                <p>رادیو</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{connectivity.radio}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.positioning?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>موقعیت‌ یابی</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {connectivity?.positioning?.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                            >
                                                <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                    {item}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {connectivity?.wifi?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p className="mb-[2px]">بی‌سیم</p>
                                <SubValue>WiFi</SubValue>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {connectivity?.wifi?.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                        >
                                            <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default General;
