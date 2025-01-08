import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Not Found",
    description:
        "the Boring Utilities App helps Simplify life's boring tasks with a collection of tools to assist you!",
};

export default function NotFound() {
    return (
        <div className="grid h-dvh place-items-center font-generalSans">
            <div>
                <h2 className="font-clashDisplay text-2xl">Page not found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button className="mt-4 w-full rounded border p-2">Return Home</button>
                </Link>
            </div>
        </div>
    );
}
