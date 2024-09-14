import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Storages = () => {
    const {
        specs: { storage },
    } = useContext(ProductContext);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-[#aaa] font-shabmt">{children}</div>
    );
    return (
        storage?.isExists && (
            <Part>
                <Header title="فضای ذخیره‌سازی" icon="storage2" />

                <Container>
                    {storage?.capacities.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>ظرفیت</p>
                            </TitleContainer>
                            <ul className="px-2">
                                {storage?.capacities?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                    >
                                        <div className="flex items-center gap-2 pr-2 text-sm leading-[22px]">
                                            <p className="font-shabmb text-lg tracking-[2px]">
                                                {item.value}
                                            </p>
                                            <SubValue>{item.unit}</SubValue>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {storage?.storageType && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{storage.storageType}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {storage?.upgradable && (
                        <div>
                            <TitleContainer>
                                <p>قابلیت ارتفاع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{storage.upgradable}</p>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Storages;
