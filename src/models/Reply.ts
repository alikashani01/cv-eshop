import {
    Document,
    InferSchemaType,
    Model,
    model,
    models,
    Schema,
    Types,
} from "mongoose";

const ReplySchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        userType: String,
        review: { type: Schema.Types.ObjectId, ref: "Review" },
        question: { type: Schema.Types.ObjectId, ref: "Question" },
        content: String,
    },
    { timestamps: true }
);

type IReply = InferSchemaType<typeof ReplySchema> & {
    _id: Types.ObjectId;
};

let Reply: Model<IReply & Document>;

try {
    Reply = models.Reply || model<IReply & Document>("Reply", ReplySchema);
} catch (error) {
    Reply = model<IReply & Document>("Reply", ReplySchema);
}

export default Reply;
