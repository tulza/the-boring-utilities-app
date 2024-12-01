"use client";

import React from "react";
import { easeOutQuad } from "@libs/ease";
import { motion, Variants } from "framer-motion";

const Intro = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="fixed flex h-dvh w-dvw flex-col justify-between">
                <motion.div
                    className="flex items-end justify-center bg-blue-500"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{ duration: 0.75, delay: 0.75, ease: easeOutQuad }}
                >
                    <motion.div
                        className="mb-2 flex text-3xl font-bold"
                        animate="animate"
                        initial="initial"
                        transition={{ staggerChildren: 0.05 }}
                        variants={containerVariant}
                    >
                        {"WDCC".split("").map((word, i) => (
                            <motion.p className="text-3xl font-bold" key={i} variants={textVariant}>
                                {word}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div
                    className="bg-blue-500"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{ duration: 0.75, delay: 0.75, ease: easeOutQuad }}
                />
            </div>

            {children}
        </>
    );
};

const containerVariant: Variants = {
    initial: {
        y: 20,
        scale: 1.5,
    },
    animate: {
        y: 0,
        scale: 1,
    },
};

const textVariant: Variants = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
    },
};

export default Intro;
