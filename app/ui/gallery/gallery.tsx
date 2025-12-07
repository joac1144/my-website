"use client";

import { useCallback } from "react"
import Image from "next/image"
import { useState } from "react";
import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryNavButton from "@/app/ui/gallery/galleryNavButton";

type Props = {
    images: {
        url: string;
        alt: string | null;
    }[];
}

export default function Gallery({ images }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaApi || !emblaThumbsApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
    }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();

        emblaApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="max-w-xl mx-auto">
            <div className="overflow-hidden rounded-2xl relative" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                    {
                        images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] min-w-0 pl-4"
                            >
                                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
                                    <a href={image.url} target="_blank" rel="noreferrer">
                                        <Image
                                            src={image.url}
                                            alt={image.alt || ""}
                                            fill
                                            className="object-cover select-none"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button
                    onClick={scrollPrev}
                    className="absolute top-1/2 left-3 -translate-y-1/2 p-1 rounded-full text-purple-700/75 bg-white/75 hover:ring hover:ring-purple-700/75 shadow-md cursor-pointer"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute top-1/2 right-3 -translate-y-1/2 p-1 rounded-full text-purple-700/75 bg-white/75 hover:ring hover:ring-purple-700/75 shadow-md cursor-pointer"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
                <div className="flex flex-row">
                    {images.map((image, index) => (
                        <GalleryNavButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => onThumbClick(index)}
                            image={image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}