import Image from "next/image";
import Link from "next/link";
import LargeScreenContainer from "../../../../_components/LargeScreenContainer";
import Info from "../info/Info";

const Large = () => {
    return (
        <LargeScreenContainer>
            <>
                <div>
                    <Link href="/account/orders">
                        <Image
                            width={20}
                            height={20}
                            src="/icons/arrow/right-b.png"
                            alt=""
                            priority
                        />
                        سفارشات
                    </Link>
                </div>
                <p className="justify-center">جزییات سفارش</p>
                <div />
            </>
            <Info />
        </LargeScreenContainer>
    );
};

export default Large;
