import { getSession } from "@/authentication";
import connectDB from "@/db";
import Order from "@/src/models/Order";
import User from "@/src/models/User";
import { PayOrder } from "@/src/queries/order/Entities";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد", { status: 404 });

        const { items, shippingInfo, prices }: PayOrder = await request.json();

        const generateRandomCode = (): string => {
            const characters = "0123456789";
            let code = "";
            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(
                    Math.random() * characters.length
                );
                code += characters[randomIndex];
            }
            return code;
        };
        let uniqueCode = generateRandomCode();
        let isDuplicatedCode = true;
        while (isDuplicatedCode) {
            const order = await Order.findOne({ code: uniqueCode });
            if (!order) {
                isDuplicatedCode = false;
            } else {
                uniqueCode = generateRandomCode();
            }
        }

        const newOrder = await Order.create({
            user: user._id,
            code: uniqueCode,
            items,
            shippingInfo: {
                customer: {
                    fullName: shippingInfo.fullName,
                    mobile: shippingInfo.mobile,
                },
                address: {
                    title: shippingInfo.title,
                    state: shippingInfo.state,
                    city: shippingInfo.city,
                    street: shippingInfo.street,
                    zipCode: shippingInfo.zipCode,
                    description: shippingInfo.description,
                },
            },
            prices,
        });

        // Handle Product's SaleNumber & CountInStock:
        // ...

        user.orders = [newOrder._id, ...(user.orders || [])];
        await user.save();

        return NextResponse.json(newOrder, { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
