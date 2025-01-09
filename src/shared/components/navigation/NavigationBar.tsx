"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Block from "@shared/components/other/Block";

const NavigationBar = ({ title }: { title: string }) => {
    const path = usePathname();
    const isRoot = path === "/";

    return (
        <Block>
            <h1 className="select-none font-clashDisplay text-2xl tracking-[10%]">{title}</h1>
            <nav className="flex gap-12 font-generalSans text-lg">
                {isRoot ? <Link href="/About">About</Link> : <Link href="/">Home</Link>}
                <Link href="/Catalogue">Catalogue</Link>
                <Link href="/Wiki">Wiki</Link>
            </nav>
        </Block>
    );
};

export default NavigationBar;
