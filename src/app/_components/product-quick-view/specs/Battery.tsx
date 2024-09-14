import { PropsWithChildren, useContext } from "react";
import { Context } from "../ProductQuickView";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Battery = () => {
    const {
        specs: { battery },
    } = useContext(Context);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-neutral-500 font-shabt">
            {children}
        </div>
    );
    return (
        battery?.isExists && (
            <Part>
                <Header title="باتری" icon="battery" />

                <Container>
                    {battery?.capacity && (
                        <div>
                            <TitleContainer>
                                <p>ظرفیت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.capacity}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.power && (
                        <div>
                            <TitleContainer>
                                <p>قدرت</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.power}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {(battery?.batteryType?.en || battery?.batteryType?.fa) && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <div className="flex flex-col gap-[2px]">
                                <p>{battery?.batteryType.fa}</p>
                                <p className="text-[.9rem] text-neutral-500 tracking-[1px] font-sfreg">
                                    {battery?.batteryType.en}
                                </p>
                            </div>
                        </div>
                    )}

                    {battery?.chargingTime && (
                        <div>
                            <TitleContainer>
                                <p>مدت زمان شارژ</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.chargingTime}</p>
                                <SubValue>ساعت</SubValue>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.fastCharge && (
                        <div>
                            <TitleContainer>
                                <p>شارژ سریع</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.fastCharge}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.replaceable && (
                        <div>
                            <TitleContainer>
                                <p>قابلیت تعویض</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.replaceable}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.cableLength?.value && (
                        <div>
                            <TitleContainer>
                                <p>طول کابل شارژر</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{battery?.cableLength?.value}</p>
                                <SubValue>
                                    {battery?.cableLength?.unit}
                                </SubValue>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.portPosition && (
                        <div>
                            <div className="min-w-[120px] max-w-[120px] text-[.9rem] text-[#999999]">
                                <p>موقعیت پورت شارژ</p>
                            </div>
                            <ValueContainer>
                                <p>{battery?.portPosition}</p>
                            </ValueContainer>
                        </div>
                    )}

                    {battery?.lifetime?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>طول عمر شارژ</p>
                            </TitleContainer>
                            <ul className="px-1">
                                {battery?.lifetime?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                    >
                                        <div className="flex items-center gap-1">
                                            <p className="pr-2 text-sm leading-[22px]">
                                                {item.title}
                                            </p>
                                            <SubValue>ساعت</SubValue>
                                            <p className="px-2 text-sm leading-[22px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {battery?.features?.length! > 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>سایر ویژگی‌ها</p>
                            </TitleContainer>
                            <ul className="px-1">
                                {battery?.features?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                    >
                                        <p className="pr-2 text-sm leading-[22px]">
                                            {item.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {battery?.featuresWithDescription?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>سایر ویژگی‌ها</p>
                            </TitleContainer>
                            <ul className="pr-2">
                                {battery?.featuresWithDescription?.map(
                                    (item, index) => (
                                        <li key={index}>
                                            <div className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full">
                                                <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                    <span>{item.title}</span>
                                                </p>
                                            </div>
                                            <ul className="flex flex-col text-sm leading-[28px] pr-4">
                                                {item.description?.map(
                                                    (d, i) => (
                                                        <li
                                                            key={i}
                                                            className="py-2 text-[#cccccc] last:border-none border-b border-[#2d2d2d] items-center flex "
                                                        >
                                                            <p>{d}</p>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Battery;
