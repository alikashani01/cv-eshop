import { PropsWithChildren, useContext } from "react";
import { Context } from "../../ProductQuickView";
import Container from "../_part/Container";
import Header from "../_part/Header";
import Part from "../_part/Part";
import TitleContainer from "../_part/Title";

const Network = () => {
    const { specs } = useContext(Context);
    if (!specs) return null;
    const network = specs?.connectivity?.network;

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );

    return (
        network?.isExists && (
            <Part>
                <Header title="شبکه" icon="5g" />

                <Container>
                    {network?.technologies?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>فناوری‌ها</p>
                            </TitleContainer>
                            <ul className="px-1">
                                {network?.technologies?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                    >
                                        <p className="pr-2 text-sm leading-[22px]">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {network?.speed && (
                        <div>
                            <TitleContainer>
                                <p>سرعت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p className="text-left">{network?.speed}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {network?.band2G?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>2G</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="px-1">
                                    {network?.band2G?.map((item, index) => (
                                        <li
                                            style={{
                                                direction: "ltr",
                                            }}
                                            key={index}
                                            className="py-2 text-left items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                        >
                                            <p className="pl-2 text-sm leading-[22px]">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {network?.band3G?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>3G</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="px-1">
                                    {network?.band3G?.map((item, index) => (
                                        <li
                                            style={{
                                                direction: "ltr",
                                            }}
                                            key={index}
                                            className="py-2 text-left items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                        >
                                            <p className="pl-2 text-sm leading-[22px]">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {network?.band4G?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>4G</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="px-1">
                                    {network?.band4G?.map((item, index) => (
                                        <li
                                            style={{
                                                direction: "ltr",
                                            }}
                                            key={index}
                                            className="py-2 text-left items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                        >
                                            <p className="pl-2 text-sm leading-[22px]">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {network?.band5G?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>5G</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="px-1">
                                    {network?.band5G?.map((item, index) => (
                                        <li
                                            style={{
                                                direction: "ltr",
                                            }}
                                            key={index}
                                            className="py-2 text-left items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                        >
                                            <p className="pl-2 text-sm leading-[22px]">
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

export default Network;
