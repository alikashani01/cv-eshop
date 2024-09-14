// app/actions/logout.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    // پاک کردن session کوکی
    cookies().set("session", "", { expires: new Date(0) });

    // بازگشت به صفحه اصلی یا لاگین بعد از logout
    redirect("/");
}
