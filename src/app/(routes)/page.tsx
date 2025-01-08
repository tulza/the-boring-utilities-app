import NavigationBar from "@shared/components/navigation/NavigationBar";
import Block from "@shared/components/other/Block";
import GenerateCard from "src/app/(routes)/_components/GenerateCard";

export default function Home() {
    return (
        <main className="flex flex-col pt-12">
            <header className="flex w-full justify-center">
                <NavigationBar title="The boring utilities" root />
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
