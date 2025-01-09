import DefaultLayout from "@shared/components/layout/DefaultLayout";
import Block from "@shared/components/other/Block";
import NoSSRWrapper from "@shared/components/other/NoSSRWrapper";

import { ConverterTool } from "./ConverterTool";

export default function Home() {
    return (
        <DefaultLayout title="Image Converter">
            <Block>
                <div className="flex w-full flex-col gap-8">
                    <NoSSRWrapper>
                        <ConverterTool />
                    </NoSSRWrapper>
                </div>
            </Block>
        </DefaultLayout>
    );
}
