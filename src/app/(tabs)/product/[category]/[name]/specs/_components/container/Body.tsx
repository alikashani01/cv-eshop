"use client";
import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Body = () => {
    const {
        specs: { body },
    } = useContext(ProductContext);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-neutral-500 font-shabt">
            {children}
        </div>
    );

    return (
        body?.isExists && (
            <Part>
                <Header icon="size" title="بدنه" />
                <Container>
                    {body?.dimensions && (
                        <div>
                            <TitleContainer>
                                <p>ابعاد</p>
                            </TitleContainer>

                            <div className="flex items-center gap-1 p-2">
                                <p className="text-right">{body?.dimensions}</p>
                            </div>
                        </div>
                    )}
                    {body?.width?.value && (
                        <div>
                            <TitleContainer>
                                <p>عرض</p>
                            </TitleContainer>

                            <ValueContainer>
                                <p className="tracking-[2px]">
                                    {body?.width.value}
                                </p>
                                <SubValue>{body?.width.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {body?.height?.value && (
                        <div>
                            <TitleContainer>
                                <p>ارتفاع</p>
                            </TitleContainer>

                            <ValueContainer>
                                <p className="tracking-[2px]">
                                    {body?.height.value}
                                </p>
                                <SubValue>{body?.height.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {body?.depth?.value && (
                        <div>
                            <TitleContainer>
                                <p>عمق</p>
                            </TitleContainer>

                            <ValueContainer>
                                <p className="tracking-[2px]">
                                    {body?.depth.value}
                                </p>
                                <SubValue>{body?.depth.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {body?.weight?.value && (
                        <div>
                            <TitleContainer>
                                <p>وزن</p>
                            </TitleContainer>

                            <ValueContainer>
                                <p className="tracking-[2px]">
                                    {body?.weight.value}
                                </p>
                                <SubValue>{body?.weight.unit}</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {body?.build?.length! > 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>جنس بدنه</p>
                            </TitleContainer>

                            <ul className="px-1">
                                {body?.build?.map((item, index) => (
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
                    {(body?.materials?.front ||
                        body?.materials?.back ||
                        body?.materials?.frame) && (
                        <div className="flex-col !items-start">
                            <TitleContainer>
                                <p>مواد سازنده</p>
                            </TitleContainer>
                            <div className="px-1 w-full last:*:border-none *:py-2 *:w-full *:items-center *:justify-between *:border-b *:border-neutral-200 *:flex *:before:bg-[#444] *:before:border *:before:border-[#555] *:before:min-w-[8px] *:before:min-h-[8px] *:before:max-h-[8px] *:before:rounded-full *:before:mt-[1px]">
                                {body?.materials?.front && (
                                    <div>
                                        <p className="pr-2 min-w-[60px] text-sm text-neutral-500">
                                            جلو
                                        </p>
                                        <p className="flex-grow w-full text-left">
                                            {body?.materials.front}
                                        </p>
                                    </div>
                                )}
                                {body?.materials?.back && (
                                    <div>
                                        <p className="pr-2 min-w-[60px] text-sm text-neutral-500">
                                            پشت
                                        </p>
                                        <p className="flex-grow w-full text-left">
                                            {body?.materials.back}
                                        </p>
                                    </div>
                                )}
                                {body?.materials?.frame && (
                                    <div>
                                        <p className="pr-2 min-w-[60px] text-sm text-neutral-500">
                                            قاب
                                        </p>
                                        <p className="flex-grow w-full text-left">
                                            {body?.materials.frame}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {body?.sim?.length! > 0 && (
                        <div>
                            <TitleContainer>
                                <p>تعداد سیم‌کارت</p>
                            </TitleContainer>

                            <ValueContainer>
                                <p>{body?.sim}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {body?.features?.length! > 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>سایر ویژگی‌ها</p>
                            </TitleContainer>

                            <ul className="px-1">
                                {body?.features?.map((item, index) => (
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
                </Container>
            </Part>
        )
    );
};

export default Body;
