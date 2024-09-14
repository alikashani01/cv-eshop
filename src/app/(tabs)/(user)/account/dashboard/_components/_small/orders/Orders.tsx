import useFetchOrderNumbers from "@/src/queries/order/useFetchListNumbers";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Link from "next/link";
import Container from "./Container";

const Orders = () => {
    const { data: orders } = useFetchOrderNumbers();
    const inProgressOrders = orders?.active || 0;
    const deliveredOrders = orders?.delivered || 0;
    return (
        <div>
            <div className="flex items-center justify-between px-[6px] pl-1">
                <p className="text-sm text-neutral-600">سفارش‌ها</p>
                <Link
                    href="dashboard/orders?status=فعال"
                    className="font-shabt text-sm"
                >
                    همه
                    <ArrowBackIosNewRoundedIcon
                        sx={{ fontSize: ".9rem", color: "#0288e0" }}
                    />
                </Link>
            </div>
            <div className="flex items-center justify-between gap-4 *:flex-1 mt-1">
                <Container
                    icon="/icons/order/delivery.png"
                    title="فعال"
                    nums={inProgressOrders}
                    iconSize={30}
                />
                <Container
                    icon="/icons/order/done.png"
                    title="تحویل شده"
                    nums={deliveredOrders}
                    iconSize={26}
                />
            </div>
        </div>
    );
};

export default Orders;
