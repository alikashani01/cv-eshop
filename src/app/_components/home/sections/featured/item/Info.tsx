import Price from "../../../../_modules/Price";

interface Props {
    nameEn: string;
    price: number;
}

export default function Info({ price, nameEn }: Props) {
    return (
        <div className="pt-4 w-full hidden lg:flex flex-col items-center overflow-hidden *:text-center">
            <p
                className="w-full ltr font-sft text-[.9rem] text-neutral-600 text-center text-ellipsis text-nowrap overflow-hidden pb-2"
                title={nameEn}
            >
                {nameEn}
            </p>
            <Price price={price} />
        </div>
    );
}
