"use client";

import { useState, useEffect } from "react";

type VerticalTextSlider = {
    paraText?: React.ReactNode;
    paraClasses?: string;
    slideItems?: { text: string; color: string }[];
    slideClasses?: string;
}

const SLIDE_ITEMS = [
    { text: "Plumbing", color: "text-red-600" },
    { text: "Auto Repair", color: "text-blue-600" },
    { text: "Electricians", color: "text-emerald-600" },
];

export default function VerticalTextSlider({
    paraText = 'Sample text.', 
    paraClasses = 'text-black text-xl',
    slideItems = SLIDE_ITEMS,
    slideClasses = 'font-bold' }: VerticalTextSlider) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Matches the total duration of the animation (1.8s)
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slideItems.length);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    const current = slideItems[index];

    return (
        <p className={`flex items-center gap-1.5 ${paraClasses}`}>
            <span>{paraText}</span>

            {/* Clip container: ensures text is hidden when it moves 20px up/down */}
            <span className="relative inline-flex h-[1.5em] overflow-hidden items-center">
                <span
                    key={current.text}
                    className={`inline-block ${slideClasses} animate-vertical-loop ${current.color}`}
                >
                    {current.text}
                </span>
            </span>
        </p>
    );
}
