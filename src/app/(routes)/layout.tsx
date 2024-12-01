import { Metadata } from "next";

import "./globals.css";

import { geistMono, geistSans } from "@fonts/GeistFont";

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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
