import { HTMLMotionProps, MotionProps } from "framer-motion";

export type HTMLAttributeNoMotion<T extends keyof HTMLElementTagNameMap> = Omit<HTMLMotionProps<T>, keyof MotionProps>;
