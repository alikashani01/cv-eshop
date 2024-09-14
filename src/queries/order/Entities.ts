export type Color = {
    code: string;
    fa: string;
    en: string;
};

export type Pricing = {
    value: number;
    discount: number;
    countInStock: number;
    storage: {
        capacity: string;
        unit: string;
    };
};

export type Item = {
    product: string;
    brand: string;
    name: string;
    category: string;
    photo: string;
    color: {
        fa: string;
        en: string;
        code: string;
    };
    storage: {
        capacity: string;
        unit: string;
    };
    price: number;
    discount: number;
    quantity: number;
    countInStock: number;
};

export type ShippingInfo = {
    _id?: string;
    phone?: string;
    fullName: string;
    mobile: string;
    isMobileVerified: boolean;
    title: string;
    street: string;
    state: string;
    city: string;
    zipCode: string;
    description: string;
};

export type PayOrder = {
    items: Item[];
    shippingInfo: ShippingInfo;
    prices: {
        tax: number;
        shipping: number;
        items: number;
        discount: number;
        profit: number;
        total: number;
    };
};

export type Order = {
    _id: string;
    user: {
        _id: string;
        fullName: string;
        mobile: string;
    };
    code: string;
    status: string;
    items: Item[];
    shippingInfo: {
        customer: {
            fullName: string;
            mobile: string;
        };
        address: {
            title: string;
            state: string;
            city: string;
            street: string;
            zipCode: string;
            description: string;
        };
    };
    prices: {
        tax: number;
        shipping: number;
        items: number;
        discount: number;
        profit: number;
        total: number;
    };
    dates?: {
        delivered: string;
        canceled: string;
        returned: string;
    };
    createdAt: string;
};
