import moment from "moment-jalaali";

export const convertMonthNameToPersianName = (value: string) =>
    ({
        Farvardin: "فروردین",
        Ordibehesht: "اردیبهشت",
        Khordaad: "خرداد",
        Tir: "تیر",
        Mordad: "مرداد",
        Amordaad: "مرداد",
        Shahrivar: "شهریور",
        Mehr: "مهر",
        Aabaan: "آبان",
        Aazar: "آذر",
        Dey: "دی",
        Bahman: "بهمن",
        Esfand: "اسفند",
    }[moment(value).format("jMMMM")] || "");

export const convertWeekDayNameToPersianName = (value: string) => {
    return moment(value).format("dddd") === "Saturday"
        ? "شنبه"
        : moment(value).format("dddd") === "Sunday"
        ? "یک‌شنبه"
        : moment(value).format("dddd") === "Monday"
        ? "دوشنبه"
        : moment(value).format("dddd") === "Thuesday"
        ? "سه‌شنبه"
        : moment(value).format("dddd") === "Wednesday"
        ? "چهارشنبه"
        : moment(value).format("dddd") === "Thursday"
        ? "پنج‌شنبه"
        : moment(value).format("dddd") === "Friday" && "جمعه";
};

export const convertDayNameToPersianName = (value: string) => {
    return moment(value).format("dddd") === "Saturday"
        ? "شنبه"
        : moment(value).format("dddd") === "Sunday"
        ? "یک‌شنبه"
        : moment(value).format("dddd") === "Monday"
        ? "دوشنبه"
        : moment(value).format("dddd") === "Thuesday"
        ? "سه‌شنبه"
        : moment(value).format("dddd") === "Wednesday"
        ? "چهارشنبه"
        : moment(value).format("dddd") === "Thursday"
        ? "پنج‌شنبه"
        : moment(value).format("dddd") === "Friday" && "جمعه";
};

export const convertDayNumberToPersianNumber = (value: string) => {
    let dayNumber = moment(value).format("jDD");

    const persianDigits: { [key: string]: string } = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    let result = "";

    for (let index = 0; index < dayNumber.length; index++) {
        const character = dayNumber[index];

        result += persianDigits[character] || character;
    }

    return result;
};

export const convertYearNumberToPersianNumber = (value: string) => {
    let dayNumber = moment(value).format("jYYYY");

    const persianDigits: { [key: string]: string } = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    let result = "";

    for (let index = 0; index < dayNumber.length; index++) {
        const character = dayNumber[index];

        result += persianDigits[character] || character;
    }

    return result;
};

export const convertTimeToPersianNumber = (value: string) => {
    let dayNumber = moment(value).format("HH:mm");

    const persianDigits: { [key: string]: string } = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    let result = "";

    for (let index = 0; index < dayNumber.length; index++) {
        const character = dayNumber[index];

        result += persianDigits[character] || character;
    }

    return result;
};
