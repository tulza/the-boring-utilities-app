import NavigationBar from "@shared/components/navigation/NavigationBar";
import Block from "@shared/components/other/Block";
import NoSSRWrapper from "@shared/components/other/NoSSRWrapper";

import { ConverterTool } from "./ConverterTool";

export default function Home() {
    return (
        <main className="flex flex-col pt-12">
            <header className="flex w-full justify-center">
                <NavigationBar title="Image Converter" />
            </header>
            <div className="mt-16 flex w-full justify-center">
                <Block>
                    <div className="flex w-full flex-col gap-8">
                        <NoSSRWrapper>
                            <ConverterTool />
                        </NoSSRWrapper>
                    </div>
                </Block>
            </div>
            s
        </main>
    );
}
