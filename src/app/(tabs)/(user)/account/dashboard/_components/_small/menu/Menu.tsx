import Item from "./Item";

const subMenuItems = [
    {
        title: "ذخیره شده‌ها",
        href: "saved",
        icon: "/icons/account/bookmarks.png",
        iconBg: "bg-[#00d166]",
        orders: 0,
    },
    {
        title: "دیدگاه‌ها",
        href: "review/list",
        icon: "/icons/account/reviews.png",
        iconBg: "bg-[#0288e0]",
        orders: 0,
    },
    {
        title: "پرسش‌ها",
        href: "question/list",
        icon: "/icons/account/questions.png",
        iconBg: "bg-[#dd11aa]",
        orders: 0,
    },
    {
        title: "بازدیدهای اخیر",
        href: "latest-visited",
        icon: "/icons/account/time.png",
        iconBg: "bg-[#331a4d]",
        orders: 0,
        noDivider: true,
    },
];

const Menu = () => {
    return (
        <div>
            {subMenuItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default Menu;
