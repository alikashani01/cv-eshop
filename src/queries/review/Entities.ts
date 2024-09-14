export type NewReview = {
    title: string;
    comment: string;
    rating: number;
    advantages: string[];
    disadvantages: string[];
};

export type Review = {
    _id: string;
    user: {
        _id: string;
        fullName: string;
    };
    userType: string;
    product: {
        _id: string;
        name: {
            en: string;
            fa: string;
        };
    };
    title?: string;
    comment?: string;
    rating: number;
    likes: string[];
    dislikes: string[];
    advantages?: string[];
    disadvantages?: string[];
    replies?: string[];
    createdAt?: string;
};

export type Reply = {
    _id: string;
    user: {
        _id: string;
        fullName: string;
    };
    userType: string;
    review: {
        _id: string;
        comment: string;
    };
    content?: string;
    createdAt?: string;
};
