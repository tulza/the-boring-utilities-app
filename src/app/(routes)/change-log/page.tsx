import DefaultLayout from "@shared/components/layout/DefaultLayout";
import Block from "@shared/components/other/Block";

import GenerateCard from "@root/_components/GenerateCard";

export default function ChangeLogPage() {
    return (
        <DefaultLayout>
            <Block>
                <div className="flex w-full flex-col gap-8">
                    <GenerateCard />
                </div>
            </Block>
        </DefaultLayout>
    );
}
