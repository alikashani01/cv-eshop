export type Login = {
    mobile: string;
    otp?: string;
};

export type Address = {
    _id?: string;
    title: string;
    state: string;
    city: string;
    street: string;
    zipCode: string;
    phone?: string | undefined;
    description?: string | undefined;
    isDefault?: boolean;
};

export type User = {
    _id?: string;
    fullName: string;
    mobile: string;
    newMobile?: string;
    otpCode?: string;
    otpCodeExpires?: number;
    addresses?: Address[];
    orders?: string[];
    reviews?: string[];
    questions?: string[];
    replies?: string[];
    savedProducts?: string[];
};
