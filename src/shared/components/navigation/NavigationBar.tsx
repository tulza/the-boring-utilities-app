import React from "react";
import Block from "@shared/components/other/Block";

const NavigationBar = ({ root, title }: { root?: boolean; title: string }) => {
    return (
        <Block>
            <h1 className="font-clashDisplay text-2xl tracking-[10%]">{title}</h1>
            <nav className="flex gap-12 font-generalSans text-lg">
                {root ? <p>About</p> : <p>Home</p>}
                <p>Catalogue</p>
                <p>Wiki</p>
            </nav>
        </Block>
    );
};

export default NavigationBar;
