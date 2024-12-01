import localFont from "next/font/local";

export const clashDisplay = localFont({
    src: [
        {
            path: "./typography/ClashDisplay/ClashDisplay-Light.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "./typography/ClashDisplay/ClashDisplay-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./typography/ClashDisplay/ClashDisplay-Medium.woff",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
});
