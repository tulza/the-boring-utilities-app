import { z } from "zod";

const CardSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    path: z.string(),
    WIP: z.boolean().optional(),
});

type Card = z.infer<typeof CardSchema>;

export { type Card, CardSchema };
