import type { Metadata } from "next";
import QueryClientProvider from "../queries/QueryClientProvider";
import NavigationLarge from "./_components/navigation/large/NavigationLarge";
import NavigationSmall from "./_components/navigation/small/Navigation";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tech Shop",
    description: "فروشگاه اینترنتی - تخصصی لوازم دیجیتال",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <QueryClientProvider>
                    <NavigationLarge />
                    <main>{children}</main>
                    <NavigationSmall />
                </QueryClientProvider>
            </body>
        </html>
    );
}
