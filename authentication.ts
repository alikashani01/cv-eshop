import { addMonths } from "date-fns";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export interface Session extends JWTPayload {
    userId?: string;
    userType?: string;
    expires?: Date;
}

const secretKey: string = "secret123";
const key = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: Session) => {
    const currentDate = new Date();
    const futureDate = addMonths(currentDate, 1);

    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(futureDate)
        .sign(key);
};

export const decrypt = async (input: string): Promise<Session> => {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
};

export const getSession = async () => {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    await updateSession();
    return await decrypt(session);
};

export const updateSession = async () => {
    const session = cookies().get("session")?.value;
    if (!session) return null;

    const currentDate = new Date();
    const expireDate = addMonths(currentDate, 1);

    const parsed = await decrypt(session);

    parsed.expires = expireDate;
    const res = NextResponse.next();

    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });

    return res;
};
