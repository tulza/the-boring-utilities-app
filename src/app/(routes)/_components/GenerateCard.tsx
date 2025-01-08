import React from "react";
import cardData from "@shared/cards/CardData.json";
import { ImageSkeleton } from "@shared/components/image/ImageSkeleton";
import { SuspenseImage } from "@shared/components/image/SuspenseImage";
import { CardSchema, type Card } from "src/app/(routes)/image-converter/_types/card";

const GenerateCard = async () => {
    if (CardSchema.array().safeParse(cardData).success === false) return <ErrorCard />;

    return cardData.map((card) => <Card {...card} key={card.title} />);
};

const Card = ({ title, description, image, path }: Card) => {
    return (
        <a
            href={path}
            className="flex h-min w-full select-none gap-12 rounded-md border bg-white px-12 py-8 shadow-card transition-[box-shadow,transform] hover:scale-105 hover:shadow-card-soft"
        >
            <div className="relative w-28">
                <SuspenseImage fill fallback={<ImageSkeleton />} src={image.src} alt={image.alt} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="whitespace-nowrap font-clashDisplay text-2xl">
                    {title} <span className="ml-2 border bg-zinc-300 px-1 font-mono text-sm">W.I.P</span>
                </h3>
                <p className="font-generalSans font-light">{description}</p>
            </div>
        </a>
    );
};

const ErrorCard = () => {
    return (
        <div className="grid w-full place-items-center rounded-md border bg-slate-100 py-4 font-generalSans shadow-card">
            <p>could not generate this card...</p>
        </div>
    );
};

export default GenerateCard;
