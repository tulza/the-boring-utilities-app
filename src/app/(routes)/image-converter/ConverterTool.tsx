"use client";

import React, { useRef, useState } from "react";
import { ImageSkeleton } from "@components/image/ImageSkeleton";
import { SuspenseImage } from "@components/image/SuspenseImage";
import extensions from "@data/image-converter/imageExtensions.json";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { cn } from "@libs/utils";
import { motion } from "framer-motion";

export function ConverterTool() {
    const [fileList, setFileList] = useState<File[]>();
    const [extension, setExtension] = useState(extensions[0].extension);
    const fileLength = fileList ? fileList.length : 0;
    const messageRef = useRef<HTMLParagraphElement>(null);
    const ffmpegRef = useRef(new FFmpeg());
    const ffmpeg = ffmpegRef.current;
    const loadFFMPEG = async () => {
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
        });
    };

    const handleConvert = async () => {
        if (!fileList || fileList.length === 0) return;

        const ffmpeg = ffmpegRef.current;
        messageRef!.current!.innerHTML = "";
        ffmpeg.on("log", ({ message }) => {
            console.log(message);
        });

        console.log("load status:", ffmpeg.loaded ? "loaded" : "not loaded");

        if (!ffmpeg.loaded) {
            console.log("loading ffmpeg");
            await loadFFMPEG();
            console.log("finished loading ffmpeg");
        }

        console.log("fileList length:", fileList.length);
        for (let i = 0; i < fileList.length; i++) {
            try {
                const file = fileList[i];
                const nameArray = file.name.split(".");
                const currentExt = nameArray[nameArray.length - 1];

                if (currentExt === extension) {
                    console.log("matching extension, skipped");
                    continue;
                }
                // replace extension with new one
                // and create the new name
                nameArray[nameArray.length - 1] = extension;
                const newName = nameArray.join(".");
                console.log(newName);

                ffmpeg.writeFile(file.name, await fetchFile(URL.createObjectURL(file)));
                await ffmpeg.exec(["-i", file.name, newName]);
                const data = await ffmpeg.readFile(newName);
                const download = URL.createObjectURL(new Blob([data], { type: "image" }));

                const link = document.createElement("a");
                link.href = download;
                link.download = newName;
                document.body.appendChild(link);
                // link.click();
            } catch (e) {
                console.error("something went wrong");
                console.error(e);
            }
        }
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e?.target?.files;
        if (!fileList) return;

        console.log(fileList);
        setFileList(
            Array(fileList.length)
                .fill(null)
                .map((_, index) => fileList[index]!)
        );
    };

    const handleExtensionChange = (ext: string) => {
        setExtension(ext);
    };

    const handleRemoveFile = (index: number) => {
        const newFileList = [...fileList!];
        newFileList.splice(index, 1);
        setFileList(newFileList);
    };

    return (
        <div className="mb-32 flex flex-col gap-4">
            <p className="text-2xl">Batch convert all to </p>
            <div className="flex w-full flex-wrap justify-center gap-2 rounded-md border bg-slate-100 p-2">
                {extensions.map((ext) => (
                    <button
                        key={ext.extension}
                        onClick={() => handleExtensionChange(ext.extension)}
                        className={cn(
                            "bg grid w-16 place-items-center rounded border bg-white",
                            extension === ext.extension && "border-2 border-secondary"
                        )}
                    >
                        <p>.{ext.extension}</p>
                    </button>
                ))}
            </div>
            <motion.div
                className="relative flex h-40 w-full items-center justify-center -space-x-8 rounded-lg border bg-slate-100 p-4 empty:before:content-['empty']"
                initial="initial"
                animate="animate"
                variants={container}
                key={fileList && Math.random()}
            >
                {fileList &&
                    Array(fileList.length)
                        .fill(null)
                        .map((_, i) => (
                            <motion.div
                                key={i + fileList[i].name}
                                className="relative aspect-square size-full h-full w-min"
                                variants={item}
                            >
                                <SuspenseImage
                                    fallback={<ImageSkeleton />}
                                    src={URL.createObjectURL(fileList[i])}
                                    alt="image"
                                    fill
                                    className="relative aspect-square h-full w-min rounded-md border-2 object-cover"
                                />
                            </motion.div>
                        ))}
            </motion.div>
            <div>
                <p className="font-geistSans text-xl">
                    Total files:{" "}
                    <motion.span
                        key={fileLength}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {fileLength}
                    </motion.span>
                </p>
            </div>
            <div className="flex select-none items-center gap-4">
                <label
                    htmlFor="file-upload"
                    className="w-min cursor-pointer whitespace-nowrap border bg-blue-600 px-8 py-2 text-white"
                >
                    Upload Image
                </label>
                <input
                    className="w-min whitespace-nowrap border p-2"
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                />
                <button
                    className="w-min whitespace-nowrap border bg-green-600 px-8 py-2 text-white"
                    onClick={handleConvert}
                >
                    Convert
                </button>
            </div>
            <hr />
            <div className="flex gap-4"></div>
            <div>
                <div className="flex w-full flex-col gap-2 truncate rounded-md border bg-slate-100 p-2 empty:before:content-['No_files']">
                    {fileList &&
                        Array(fileList.length)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    className="flex justify-between whitespace-nowrap border bg-white p-2"
                                    key={i + fileList[i].name}
                                >
                                    <p>{fileList[i]?.name}</p>
                                    <button
                                        className="rounded-md bg-red-600 p-1 text-white"
                                        onClick={() => handleRemoveFile(i)}
                                    >
                                        remove
                                    </button>
                                </div>
                            ))}
                </div>
            </div>
            <div className="flex h-80 flex-col gap-1 overflow-hidden rounded-md bg-slate-800 p-2 text-white">
                <p ref={messageRef}>Logs</p>
            </div>
        </div>
    );
}

const container = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    initial: { opacity: 0, rotate: -70 },
    animate: { opacity: 1, rotate: -20 },
};
