"use client";

import React, { useEffect, useRef } from "react";

import { AnimatePresence, motion, type Variants } from "motion/react";

import { easeOutExpo } from "@libs/ease";

import { useDialog } from "./Dialog";

const DialogContent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { isOpen, handleClose } = useDialog();

    useEffect(() => {
        if (!ref.current) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Element)) {
                handleClose();
            }
        };

        ref.current.focus({ preventScroll: true });
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="exit"
                    variants={modalVariants}
                    className="fixed inset-0 z-50 flex h-dvh w-dvw items-center justify-center"
                >
                    <motion.div
                        ref={ref}
                        variants={conVariants}
                        className="tiny-scrollbar border-gray origin-center overflow-hidden overflow-y-scroll border-4 bg-background p-4"
                    >
                        erm
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const conVariants: Variants = {
    closed: {
        padding: "0px",
        width: "0px",
        borderWidth: "0px",
    },
    open: {
        borderWidth: ["0px", "2px", "4px"],
        width: ["0px", "300px", "300px"],
        height: ["0px", "0px", "400px"],
        padding: ["0px", "0px", "16px"],
        transition: { duration: 0.75, ease: easeOutExpo },
    },
    exit: {
        borderWidth: ["4px", "2px", "0px"],
        padding: ["16px", "0px", "0px"],
        height: ["400px", "0px", "0px"],
        width: ["300px", "300px", "0px"],
        transition: { duration: 0.75, delay: 0.05, ease: easeOutExpo },
    },
};
const modalVariants: Variants = {
    closed: {
        background: "#0000",
    },
    open: {
        background: "#0008",
    },
    exit: {
        background: "#0000",
    },
};

export default DialogContent;
