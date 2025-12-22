'use client'

import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useRef } from 'react'

type LottieAnimationProps = {
    animationData: object
    className?: string
    loop?: boolean
    autoplay?: boolean
}

export default function LottieAnimation({
    animationData,
    className = 'w-20 h-20',
    loop = true,
    autoplay = true,
}: LottieAnimationProps) {
    const lottieRef = useRef<LottieRefCurrentProps>(null)

    return (
        <div className={className}>
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
            />
        </div>
    )
}
