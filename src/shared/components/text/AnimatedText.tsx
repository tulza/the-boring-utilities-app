"use client";

import React from "react";

import { motion, Variants } from "motion/react";

import { cn } from "@libs/utils";
import { type HTMLAttributeNoMotion } from "@typings/motion";

import { textVariantDefault } from "src/app/(routes)/image-converter/_data/variants/text";

interface TextProps extends HTMLAttributeNoMotion<"p"> {
    text: string;
    type?: "char" | "word";
    variants?: Variants;
    debug?: boolean;
}

const AnimatedText = ({ text, type = "word", variants = textVariantDefault, debug, ...props }: TextProps) => {
    if (debug) {
        console.log(text, type);
        console.log(text.split(type == "char" ? "" : " "));
    }

    return (
        <motion.p
            {...props}
            className={cn("flex whitespace-pre", props.className)}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
        >
            {text.split(type === "char" ? "" : " ").map((value, i) => (
                <motion.span className="block" key={i} variants={variants}>
                    {value}
                    {type === "word" && " "}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default AnimatedText;
