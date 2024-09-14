import Link from "next/link";
import LargeScreenContainer from "../../../../_components/LargeScreenContainer";
import Image from "next/image";
import Info from "../info/Info";
import Details from "../details/Details";

const Large = () => {
    return (
        <LargeScreenContainer>
            <>
                <div>
                    <Link href="list" className="text-sm">
                        <Image
                            width={18}
                            height={18}
                            src="/icons/arrow/right-b.png"
                            alt=""
                            priority
                        />
                        دیدگاه‌ها
                    </Link>
                </div>
                <p className="justify-center">جزییات دیدگاه</p>
                <div />
            </>
            <>
                <Details />
                <Info />
            </>
        </LargeScreenContainer>
    );
};

export default Large;
