import Item from "./Item";

const subMenuItems = [
    {
        title: "سفارش‌ها",
        href: "/account/orders",
        icon: "/icons/account/large/orders.png",
        iconBg: "",
    },

    {
        title: "ذخیره شده‌ها",
        href: "/account/saved",
        icon: "/icons/account/large/saved.png",
        iconBg: "",
    },
    {
        title: "دیدگاه‌ها",
        href: "/account/review/list",
        icon: "/icons/account/large/reviews.png",
        iconBg: "",
    },
    {
        title: "پرسش‌ها",
        href: "/account/question/list",
        icon: "/icons/account/large/questions.png",
        iconBg: "",
    },
];

const Menu = () => {
    return (
        <div className="h-[calc(100%-160px)] overflow-y-auto p-4">
            {subMenuItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default Menu;
