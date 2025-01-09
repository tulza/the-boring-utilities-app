import React, { ReactNode } from "react";

import NavigationBar from "../navigation/NavigationBar";

const DefaultLayout = ({ children, title = "The boring utilities" }: { children: ReactNode; title?: string }) => {
    return (
        <main className="flex flex-col pt-12">
            <header className="flex w-full justify-center">
                <NavigationBar title={title} />
            </header>
            <div className="mt-16 flex w-full justify-center">{children}</div>
        </main>
    );
};

export default DefaultLayout;
