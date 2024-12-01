import Block from "@components/Block";
import GenerateCard from "@components/home/GenerateCard";

export default function Home() {
    return (
        <main className="flex flex-col pt-12">
            <header className="flex w-full justify-center">
                <Block>
                    <h1 className="font-clashDisplay text-2xl tracking-[10%]">The boring utilities</h1>
                    <nav className="font-generalSans flex gap-12 text-lg">
                        <p>About</p>
                        <p>Catalogue</p>
                        <p>Wiki</p>
                    </nav>
                </Block>
            </header>
            <div className="mt-16 flex w-full justify-center">
                <Block>
                    <div className="w-full">
                        <GenerateCard />
                    </div>
                </Block>
            </div>
        </main>
    );
}
