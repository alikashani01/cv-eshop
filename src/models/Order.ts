import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const ItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    brand: String,
    name: String,
    category: String,
    photo: String,
    color: {
        fa: String,
        en: String,
        code: String,
    },
    storage: {
        capacity: String,
        unit: String,
    },
    price: Number,
    discount: Number,
    quantity: Number,
    countInStock: Number,
});

const OrderSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        code: { type: String },
        status: { type: String, default: "فعال" },
        items: [ItemSchema],
        shippingInfo: {
            customer: {
                fullName: { type: String },
                mobile: { type: String },
            },
            address: {
                title: { type: String },
                state: { type: String },
                city: { type: String },
                street: { type: String },
                zipCode: { type: String },
                description: { type: String },
            },
        },
        prices: {
            tax: { type: Number, default: 0 },
            shipping: { type: Number, default: 0 },
            items: { type: Number, default: 0 },
            discount: { type: Number, default: 0 },
            profit: { type: Number, default: 0 },
            total: { type: Number, default: 0 },
        },
        dates: {
            delivered: { type: Date },
            canceled: { type: Date },
            returned: { type: Date },
        },
        paymentInfo: {
            result: String,
        },
    },
    { timestamps: true }
);

type IOrder = InferSchemaType<typeof OrderSchema> & {
    _id: Types.ObjectId;
};

let Order: Model<IOrder & Document>;

try {
    Order = models.Order || model<IOrder & Document>("Order", OrderSchema);
} catch (error) {
    Order = model<IOrder & Document>("Order", OrderSchema);
}

export default Order;
