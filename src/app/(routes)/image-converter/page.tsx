import Block from "@components/Block";
import GenerateCard from "@components/home/GenerateCard";
import NavigationBar from "@components/navigation/NavigationBar";

export default function Home() {
    return (
        <main className="flex flex-col pt-12">
            <header className="flex w-full justify-center">
                <NavigationBar title="Image Converter" />
            </header>
            <div className="mt-16 flex w-full justify-center">
                <Block>
                    <div className="flex w-full flex-col gap-8">
                        <GenerateCard />
                    </div>
                </Block>
            </div>
        </main>
    );
}
