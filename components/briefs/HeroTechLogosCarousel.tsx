"use client"

import Image from "next/image"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

type Props = {
    logos: readonly string[]
}

function altFromSrc(src: string, index: number): string {
    const base = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? ""
    const readable = base
        .replace(/[-_]/g, " ")
        .replace(/\d{3,4}px/gi, "")
        .trim()
    return readable || `Logo ${index + 1}`
}

/** Auto-advancing logo strip using ShadCN Carousel + Embla Autoplay. */
export function HeroTechLogosCarousel({ logos }: Props) {
    const [autoplay] = React.useState(
        () =>
            Autoplay({
                delay: 1100,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            })
    )

    if (logos.length === 0) return null

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[autoplay]}
            className="w-full"
        >
            <CarouselContent className="-ml-3 md:-ml-4">
                {logos.map((src, i) => (
                    <CarouselItem
                        key={`${src}-${i}`}
                        className="basis-1/3 pl-3 sm:basis-1/4 md:basis-1/5 md:pl-4 lg:basis-1/6"
                    >
                        <div className="flex h-14 items-center justify-center px-2">
                            <Image
                                src={src}
                                alt={altFromSrc(src, i)}
                                width={140}
                                height={56}
                                className="max-h-12 w-auto max-w-full object-contain opacity-85"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
