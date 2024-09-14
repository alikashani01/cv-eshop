import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });

    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 404 });

        const id = new URL(request.url).searchParams.get("id") || "";
        const currentAddress = user.addresses?.find(
            (a) => a._id?.toString() === id.toString()
        );

        if (!currentAddress)
            return NextResponse.json("آدرسی پیدا نشد!", { status: 404 });

        if (user.addresses) {
            const filteredAddresses = user.addresses.filter(
                (a) => a._id?.toString() !== id.toString()
            ) as Types.Subdocument<Types.ObjectId>[];
            user.set("addresses", filteredAddresses);
        }

        if (
            user.addresses &&
            user.addresses?.length! > 0 &&
            currentAddress.isDefault
        ) {
            user.addresses[0].isDefault = true;
        }

        await user.save();

        return NextResponse.json("حذف شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
