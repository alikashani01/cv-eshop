import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const QuestionSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        subject: String,
        content: String,
        replies: [{ type: Schema.Types.ObjectId, ref: "Reply", default: [] }],
        likes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
        dislikes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    },
    { timestamps: true }
);

type IQuestion = InferSchemaType<typeof QuestionSchema> & {
    _id: Types.ObjectId;
};

let Question: Model<IQuestion & Document>;

try {
    Question =
        models.Question ||
        model<IQuestion & Document>("Question", QuestionSchema);
} catch (error) {
    Question = model<IQuestion & Document>("Question", QuestionSchema);
}

export default Question;
