"use client";

import React from "react";

import { BuilderContext } from "./_component/BuilderContext";
import READMEDisplay from "./_component/READMEDisplay";
import ReorderRow from "./_component/ReorderRow";

const ReadMeBuilder = () => {
    return (
        <BuilderContext>
            <div className="flex gap-4 px-8">
                <ReorderRow />
                <READMEDisplay />
            </div>
        </BuilderContext>
    );
};

export default ReadMeBuilder;
