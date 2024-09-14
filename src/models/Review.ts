import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const ReviewSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        userType: { type: String },
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        title: String,
        comment: String,
        rating: { type: Number, default: 0 },
        likes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
        dislikes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
        advantages: [String],
        disadvantages: [String],
        replies: [{ type: Schema.Types.ObjectId, ref: "Reply", default: [] }],
    },
    { timestamps: true }
);

type IReview = InferSchemaType<typeof ReviewSchema> & {
    _id: Types.ObjectId;
};

let Review: Model<IReview & Document>;

try {
    Review = models.Review || model<IReview & Document>("Review", ReviewSchema);
} catch (error) {
    Review = model<IReview & Document>("Review", ReviewSchema);
}

export default Review;
