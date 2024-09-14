import Image from "next/image";

interface Props {
    item: {
        fa?: string | undefined;
        en?: string | undefined;
        photo?: string | undefined;
        description?: string | undefined;
    };
}

const Item = ({ item }: Props) => {
    return (
        <li
        //  className="h-[224px]"
        >
            {/* <Image
                width={1000}
                height={1000}
                src={item.photo || ""}
                alt=""
                className="w-full h-[calc(100%-40px)] object-contain"
            /> */}
            <p className="h-14 flex items-center justify-center text-center">
                {item.fa}
            </p>
        </li>
    );
};

export default Item;
