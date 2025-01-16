"use client";

import React from "react";

import { Reorder, useMotionValue } from "motion/react";

import { READMETemplateProps } from "../_data/READMETemplate";
import { useBuilder } from "./BuilderContext";
import { Dialog, DialogTrigger } from "./Dialog";
import DialogContent from "./DialogBase";

export default function App() {
    const { items, handleReorder } = useBuilder();
    return (
        <div>
            <Reorder.Group className="flex w-[300px] flex-col gap-2" axis="y" onReorder={handleReorder} values={items}>
                {items.map((item) => (
                    <Item key={item.label} item={item} />
                ))}
            </Reorder.Group>
            <Dialog>
                <DialogContent></DialogContent>
                <DialogTrigger className="mt-2 w-full bg-black p-2 text-center text-white">Open dialog</DialogTrigger>
            </Dialog>
        </div>
    );
}

interface Props {
    item: READMETemplateProps;
}

export const Item = ({ item }: Props) => {
    const y = useMotionValue(0);

    return (
        <Reorder.Item className="border-2 p-2" as="div" value={item} id={item} style={{ y }}>
            <span>{item.label}</span>
        </Reorder.Item>
    );
};
