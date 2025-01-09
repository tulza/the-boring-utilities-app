import { z } from "zod";

const CardSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    path: z.string(),
    version: z.string().optional(),
});

type Card = z.infer<typeof CardSchema>;

const cardData: Card[] = [
    {
        title: "Image Converter",
        description: "Convert an image file(s) into another type",
        image: { src: "/svg/converter.svg", alt: "Image Converter" },
        path: "/image-converter",
        version: "1.0.0",
    },
    {
        title: "README Builder",
        description: "Turn your video into a gif",
        image: { src: "/svg/noimage.svg", alt: "no image" },
        path: "/video-to-gif",
    },
    // {
    //     title: "Video to gif",
    //     description: "Turn your video into a gif",
    //     image: { src: "/svg/noimage.svg", alt: "no image" },
    //     path: "/video-to-gif",
    //     WIP: true,
    // },
    {
        title: "Color to Tailwind",
        description: "convert any color format to tailwind usable",
        image: { src: "/svg/noimage.svg", alt: "no image" },
        path: "/color-to-tailwind",
    },
];

export type { Card };
export { cardData, CardSchema };
