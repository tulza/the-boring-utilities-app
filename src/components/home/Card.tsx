import React from "react";
import { ImageSkeleton } from "@components/image/ImageSkeleton";
import { SuspenseImage } from "@components/image/SuspenseImage";

const Card = () => {
    return (
        <div className="shadow-card flex h-min w-full select-none gap-12 rounded-md border bg-white px-12 py-8">
            <div className="relative w-28">
                <SuspenseImage fill fallback={<ImageSkeleton />} src="/svg/converter.svg" alt="Image Converter" />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-clashDisplay whitespace-nowrap text-2xl">Image Converter</h3>
                <p className="font-generalSans font-light">Convert an image file(s) into another type</p>
            </div>
        </div>
    );
};

export default Card;
