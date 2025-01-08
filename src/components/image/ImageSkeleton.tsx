"use client";

import { easeOutQuad } from "@libs/ease";
import { motion } from "framer-motion";

export const ImageSkeleton = ({ width, height }: { width?: number; height?: number }) => {
    return (
        <div
            style={{ aspectRatio: width && height && `${width} / ${height}` }}
            className="grid size-full place-items-center rounded-[inherit]"
        >
            <motion.div
                className="grid grid-cols-2 gap-2 *:size-4 *:rounded-full *:bg-secondary"
                key="loading"
                initial={{ opacity: 0 }}
                animate={{
                    rotate: [0, 90, 90, 180, 180, 270, 270, 360, 360],
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: easeOutQuad }}
            >
                <div className="brightness-75"></div>
                <div></div>
                <div className="brightness-125"></div>
                <div className="brightness-150"></div>
            </motion.div>
        </div>
    );
};
