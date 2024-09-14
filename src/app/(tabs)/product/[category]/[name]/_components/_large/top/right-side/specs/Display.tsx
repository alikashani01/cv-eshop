import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Display = () => {
    const {
        category,
        specs: { display },
    } = useContext(ProductContext);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-[.8rem] text-[#aaa] font-shabmt">{children}</div>
    );
    return (
        display?.isExists && (
            <Part>
                <Header
                    title="نمایشگر"
                    icon={
                        category.en === "mobile" ? "mobile-display" : "display2"
                    }
                />
                <Container>
                    {display?.size && (
                        <div>
                            <TitleContainer>
                                <p>ابعاد</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{display?.size}</p>
                                <SubValue>اینچ</SubValue>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.resolution?.hor && (
                        <div>
                            <TitleContainer>
                                <p>وضوح</p>
                                <SubValue>رزولوشن</SubValue>
                            </TitleContainer>
                            <ValueContainer>
                                <p className="tracking-[2px]">
                                    {display?.resolution?.hor}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#aaa"
                                    className="bi bi-x"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                                <p className="tracking-[2px]">
                                    {display?.resolution?.ver}
                                </p>
                            </ValueContainer>
                        </div>
                    )}
                    {(display?.displayType?.en || display?.displayType?.fa) && (
                        <div>
                            <TitleContainer>
                                <p>نوع</p>
                            </TitleContainer>
                            <div className="text-left">
                                <p className="tracking-[1px] font-sfreg text-left">
                                    {display?.displayType.en}
                                </p>
                            </div>
                        </div>
                    )}
                    {display?.ppi && (
                        <div>
                            <div className="min-w-[120px] text-[#777] *:font-shabt">
                                <p className="text-[.9rem]">پیکسل در هر اینچ</p>
                                <p className="text-[.8rem] text-[#999]">PPI</p>
                            </div>
                            <ValueContainer>
                                <p className="tracking-[2px]">{display?.ppi}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.protection && (
                        <div>
                            <TitleContainer>
                                <p>محافظ</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{display?.protection}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.aspectRatio && (
                        <div>
                            <TitleContainer>
                                <p>نسبت تصویر</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p className="tracking-[3px]">
                                    {display?.aspectRatio}
                                </p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.screenToBodyRatio && (
                        <div>
                            <div className="min-w-[120px] text-[#bababa]">
                                <p className="text-[.9rem]">
                                    نسبت تصویر به بدنه
                                </p>
                            </div>
                            <ValueContainer>
                                <p>{display?.screenToBodyRatio}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.ambientLightSensor && (
                        <div>
                            <div className="min-w-[120px] text-[#bababa]">
                                <p className="text-[.9rem]">سنسور نور محیطی</p>
                            </div>
                            <ValueContainer>
                                <p>{display?.ambientLightSensor}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.hdr && (
                        <div>
                            <div className="min-w-[120px] text-[#bababa]">
                                <p className="text-[.9rem]">HDR</p>
                                <SubValue>دامنه‌ی دینامیکی بالا</SubValue>
                            </div>
                            <ValueContainer>
                                <p>{display?.hdr}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.touchScreen && (
                        <div>
                            <TitleContainer>
                                <p>صفحه‌ لمسی</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{display?.touchScreen}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.refreshRate && (
                        <div>
                            <TitleContainer>
                                <p className="mb-[3px]">نرخ تازه‌سازی</p>
                                <SubValue>Refresh Rate</SubValue>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{display?.refreshRate}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {display?.features?.length! > 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>سایر ویژگی‌ها</p>
                            </TitleContainer>
                            <ul className="px-1">
                                {display?.features?.map((item, index) => (
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

export default Display;
