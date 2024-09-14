import { NextRequest, NextResponse } from "next/server";
import { getSession } from "../authentication";

export async function middleware(request: NextRequest) {
    const session = await getSession();

    if (session) {
        if (request.nextUrl.pathname === "/signin") {
            return NextResponse.redirect(
                new URL("/account/dashboard", request.nextUrl)
            );
        }
    } else {
        if (request.nextUrl.pathname.startsWith("/account")) {
            return NextResponse.redirect(new URL("/signin", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/account/dashboard/:path*", "/signin"],
};
