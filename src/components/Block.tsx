import React from "react";
import { cn } from "@libs/utils";

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const Block = ({ children, className }: BlockProps) => {
    return (
        <div className={cn("flex w-[clamp(320px,80%,1200px)] items-end justify-between font-medium", className)}>
            {children}
        </div>
    );
};

export default Block;
