export default function convertCategory(category: string): string {
    let result = "";

    switch (category) {
        case "لپتاپ":
            return (result = "laptop");
        case "موبایل":
            return (result = "mobile");
        case "تبلت":
            return (result = "tablet");
        case "سرگرمی":
            return (result = "entertainment");
        case "واقعیت ترکیبی":
            return (result = "va reality");
        case "لوازم جانبی":
            return (result = "accessory");

        case "laptop":
            return (result = "لپتاپ");
        case "mobile":
            return (result = "موبایل");
        case "tablet":
            return (result = "تبلت");
        case "entertainment":
            return (result = "سرگرمی");
        case "va reality":
            return (result = "واقعیت ترکیبی");
        case "accessory":
            return (result = "لوازم جانبی");

        default:
            return (result = "مقدار نامعتبر");
    }
}
