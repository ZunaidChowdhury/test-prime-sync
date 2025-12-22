'use client'

import Image from 'next/image'

interface InfiniteScrollerProps {
    images: { src: string; alt?: string }[]
    speed?: number
}

export default function InfiniteImageScroller({
    images,
    speed = 30,
}: InfiniteScrollerProps) {
    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex w-max animate-scroll bg-[#f6f6f6]"
                style={{ animationDuration: `${speed}s` }}
            >
                {[...images, ...images].map((img, index) => (
                    <div key={index} className="relative mx-6 h-12.5 w-32 shrink-0 mix-blend-multiply my-8">
                        <Image
                            src={img.src}
                            alt={img.alt ?? 'logo'}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Gradient fade edges */}
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white" /> */}
        </div>
    )
}
