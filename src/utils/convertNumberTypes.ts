export const convertEngToPer = (value: string | number): string | number => {
    const convertedToString = String(value);

    const englishToPersianMap: { [key: string]: string } = {
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

    for (let i = 0; i < convertedToString.length; i++) {
        const character = convertedToString[i];
        result += englishToPersianMap[character] || character;
    }

    return result;
};

export const convertPerToEng = (value: string | number): string => {
    const englishToPersianMap: { [key: string]: string } = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    };

    let result = "";

    const stringValue = String(value);

    for (let index = 0; index < stringValue.length; index++) {
        const character = stringValue[index];

        result += englishToPersianMap[character] || character;
    }

    return result;
};

export const convertEngToPerDigits = (numbers: string): string => {
    const persianDigits: string[] = [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹",
    ];
    return numbers.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};
