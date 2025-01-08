import { HTMLMotionProps, MotionProps } from "motion/react";

export type HTMLAttributeNoMotion<T extends keyof HTMLElementTagNameMap> = Omit<HTMLMotionProps<T>, keyof MotionProps>;
