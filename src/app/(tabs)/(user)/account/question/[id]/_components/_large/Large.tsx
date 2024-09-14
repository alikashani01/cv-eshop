import Link from "next/link";
import LargeScreenContainer from "../../../../_components/LargeScreenContainer";
import Image from "next/image";
import Details from "../details/Details";
import Info from "../info/Info";

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
                        پرسش‌ها
                    </Link>
                </div>
                <p className="justify-center">جزییات پرسش</p>
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
