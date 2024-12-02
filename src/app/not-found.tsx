import Link from "next/link";

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
