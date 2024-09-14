import Image from "next/image";

export default async function Item({ item }: { item: string }) {
    return (
        <div className="w-[300px] flex flex-col items-center justify-center p-3 rounded-3xl bg-second-theme transition-all duration-500 hover:opacity-75">
            <Image
                width={4000}
                height={4000}
                alt=""
                className="w-full h-[100%] object-contain"
                src={item}
            />
        </div>
    );
}
