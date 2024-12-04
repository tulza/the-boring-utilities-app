import { Metadata } from "next";

import "../../styles/globals.css";

import { clashDisplay } from "src/fonts/ClashDisplay";
import { generalSans } from "src/fonts/typography";

export const metadata: Metadata = {
    title: "The boring utilities app",
    description:
        "the Boring Utilities App helps Simplify life's boring tasks with a collection of tools to assist you!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${clashDisplay.variable} ${generalSans.className} antialiased`}>{children}</body>
        </html>
    );
}
