import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
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

        const { title, state, city, street, zipCode, phone, description } =
            await request.json();

        const id = new URL(request.url).searchParams.get("id") || "";

        const currentAddress = user.addresses?.find(
            (a) => a._id?.toString() === id.toString()
        );

        if (!currentAddress)
            return NextResponse.json("آدرسی پیدا نشد!", { status: 404 });

        currentAddress.title = title;
        currentAddress.state = state;
        currentAddress.city = city;
        currentAddress.street = street;
        currentAddress.zipCode = zipCode;
        currentAddress.phone = phone;
        currentAddress.description = description;

        await user.save();

        return NextResponse.json("آدرس به‌روز شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
