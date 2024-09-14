export type NewQuestion = {
    content: string;
};

export type Question = {
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
    subject?: string;
    content?: string;
    likes: string[];
    dislikes: string[];
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
    question?: {
        _id: string;
        content: string;
    };
    content?: string;
    createdAt?: string;
};
