"use client";

import React from "react";

import { useBuilder } from "./BuilderContext";

const READMEDisplay = () => {
    const { items } = useBuilder();
    return (
        <code className="border-xl grow whitespace-pre-line border-2 p-8">
            {items.map((item) => (
                <div key={item.label}>{item.content}</div>
            ))}
        </code>
    );
};

export default READMEDisplay;
