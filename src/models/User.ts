import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

export const AddressSchema = new Schema({
    title: String,
    state: String,
    city: String,
    street: String,
    zipCode: String,
    phone: String,
    description: String,
    isDefault: Boolean,
});

const UserSchema = new Schema(
    {
        fullName: String,
        mobile: String,
        newMobile: String,
        otpCode: String,
        otpCodeExpires: Number,
        addresses: [AddressSchema],
        orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
        reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
        questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
        replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
        savedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    },
    {
        timestamps: true,
    }
);

type IUser = InferSchemaType<typeof UserSchema> & {
    _id: Types.ObjectId;
};

let User: Model<IUser & Document>;

try {
    User = models.User || model<IUser & Document>("User", UserSchema);
} catch (error) {
    User = model<IUser & Document>("User", UserSchema);
}

export default User;
