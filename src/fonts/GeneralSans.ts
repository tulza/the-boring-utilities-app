import localFont from "next/font/local";

export const generalSans = localFont({
    src: [
        {
            path: "./typography/GeneralSans/GeneralSans-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./typography/GeneralSans/GeneralSans-Medium.woff",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-generalSans",
});
