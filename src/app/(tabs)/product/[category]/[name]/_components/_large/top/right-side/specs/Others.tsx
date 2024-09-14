import { PropsWithChildren, useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Container from "./_part/Container";
import Header from "./_part/Header";
import Part from "./_part/Part";
import TitleContainer from "./_part/Title";

const Others = () => {
    const {
        specs: {
            other,
            technologies,
            sensors,
            microphones,
            controls,
            audioSources,
            powerSource,
            os,
        },
    } = useContext(ProductContext);

    const ValueContainer = ({ children }: PropsWithChildren) => (
        <div className="flex items-center gap-[6px]">{children}</div>
    );
    const SubValue = ({ children }: PropsWithChildren) => (
        <div className="text-sm text-[#aaa] font-shabt">{children}</div>
    );

    return (
        (other?.isExists ||
            technologies?.length !== 0 ||
            sensors?.length !== 0 ||
            microphones?.length !== 0 ||
            controls?.length !== 0 ||
            audioSources?.length !== 0) && (
            <Part>
                <Header title="سایر مشخصات" icon="others" />

                <Container>
                    {technologies?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>فناوری‌ها</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {technologies?.map((item, index) => (
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
                            </ValueContainer>
                        </div>
                    )}
                    {sensors?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <div>
                                <p className="text-[1.1rem] text-[#cacaca]">
                                    سنسورها | حسگرها
                                </p>
                            </div>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {sensors?.map((item, index) => (
                                        <li key={index}>
                                            <div className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full">
                                                <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                    <span>{item.fa}</span>
                                                    <SubValue>
                                                        {item.en}
                                                    </SubValue>
                                                </p>
                                            </div>
                                            <ul className="flex flex-col text-sm leading-[28px] pr-4">
                                                {item.description?.map(
                                                    (d, i) => (
                                                        <li
                                                            key={i}
                                                            className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                                        >
                                                            <p>{d}</p>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {microphones?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>میکروفون‌ها</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {microphones?.map((item, index) => (
                                        <li key={index}>
                                            <div className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full">
                                                <p className="pr-2 text-sm leading-[22px]">
                                                    {item.title}
                                                </p>
                                            </div>
                                            <ul className="flex text-[#cccccc] flex-col text-sm leading-[28px] pr-4">
                                                {item.description?.map(
                                                    (d, i) => (
                                                        <li key={i}>{d}</li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {controls?.length !== 0 && (
                        <div className="flex-col !items-start gap-2">
                            <TitleContainer>
                                <p>کنترل‌ها</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul className="pr-2">
                                    {controls?.map((item, index) => (
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
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {audioSources?.length !== 0 && (
                        <div>
                            <TitleContainer>
                                <p>منابع صدا</p>
                            </TitleContainer>
                            <ValueContainer>
                                <ul>
                                    {audioSources?.map((item, index) => (
                                        <li key={index}>
                                            <p>{item.title}</p>
                                            <p>
                                                {item.description?.map(
                                                    (i, index) => (
                                                        <p key={index}>{i}</p>
                                                    )
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}

                    {other?.speaker?.title && (
                        <div>
                            <TitleContainer>
                                <p>بلندگو</p>
                                <SubValue>اسپیکر</SubValue>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{other?.speaker.title}</p>
                                <ul>
                                    {other?.speaker.description?.map(
                                        (item, index) => (
                                            <li key={index}>
                                                <div className="py-2 pb-0 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full">
                                                    <p className="flex flex-col pr-2 text-sm leading-[22px]">
                                                        <span>{item}</span>
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </ValueContainer>
                        </div>
                    )}
                    {other?.touchpad?.size?.hor && (
                        <div>
                            <TitleContainer>
                                <p>تاچ پد</p>
                            </TitleContainer>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p>{other?.touchpad?.size.hor}</p>
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
                                    <p>{other?.touchpad?.size.ver}</p>
                                    <p className="text-sm text-[#aaa] font-shabmt">
                                        سانتی‌متر
                                    </p>
                                </div>
                                <ul>
                                    {other?.touchpad?.description?.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="py-2 items-center flex before:bg-[#444] before:border before:border-[#555] before:min-w-[8px] before:min-h-[8px] before:max-h-[8px] before:rounded-full"
                                            >
                                                <p className="pr-2 text-sm leading-[22px]">
                                                    {item}
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                    {powerSource && (
                        <div>
                            <TitleContainer>
                                <p>منبع برق</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p>{powerSource}</p>
                            </ValueContainer>
                        </div>
                    )}
                    {os && (
                        <div>
                            <TitleContainer>
                                <p>سیستم عامل</p>
                            </TitleContainer>
                            <ValueContainer>
                                <p className="font-sfreg tracking-wide">{os}</p>
                            </ValueContainer>
                        </div>
                    )}
                </Container>
            </Part>
        )
    );
};

export default Others;
