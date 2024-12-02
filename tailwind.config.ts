import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                secondary: "hsl(var(--secondary))",
                tertiary: "hsl(var(--tertiary))",
            },
            fontFamily: {
                geistSans: ["var(--font-geist-sans)"],
                kollektif: ["var(--font-kollektif)"],
                geistMono: ["var(--font-geist-mono)"],
                generalSans: ["var(--font-generalSans)"],
                clashDisplay: ["var(--font-clash-display)"],
            },
            boxShadow: {
                card: "16px 16px 40px 0px rgba(0, 0, 0, 0.10)",
                "card-soft": "8px 8px 24px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
    plugins: [],
} satisfies Config;
