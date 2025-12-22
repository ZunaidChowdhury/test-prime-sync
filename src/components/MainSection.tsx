'use client'


import { PhoneCall, CalendarCheck, TrendingUp, Users, ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react'
import LottieAnimation from './LottieAnimation'

import clockAnimation from '../../public/animations/clock.json'
import calendarAnimation from '../../public/animations/calendar.json'
import revenueGrowthAnimation from '../../public/animations/revenue-growth.json'
import equalityAnimation from '../../public/animations/equality_12317783.json'
import InfiniteImageScroller from './InfiniteImageScroller'
import VerticalTextSlider from './VerticalTextSlider'
import Form1 from './form/Form1'
import Form2 from './form/Form2'
import Form3 from './form/Form3'
import { useState } from 'react'
import Form4 from './form/Form4'

export default function AutomateSection() {

    const logos = [
        { src: '/logos/logo-1.png', alt: 'Logo 1' },
        { src: '/logos/logo-2.png', alt: 'Logo 2' },
        { src: '/logos/logo-3.png', alt: 'Logo 3' },
        { src: '/logos/logo-4.png', alt: 'Logo 4' },
        { src: '/logos/logo-5.png', alt: 'Logo 5' },
        { src: '/logos/logo-6.png', alt: 'Logo 6' },
        { src: '/logos/logo-7.png', alt: 'Logo 7' },
        { src: '/logos/logo-8.png', alt: 'Logo 8' },
        { src: '/logos/logo-9.png', alt: 'Logo 9' },
    ]

    const [currentForm, setcurrentForm] = useState<number>(1);

    // const fadeOut = `transition-all transition-discrete duration-500 opacity-100 block ${ } `;


    const handleNextForm = () => {
        setcurrentForm((prev) => prev + 1)
    }

    const handlePrevForm = () => {
        setcurrentForm((prev) => prev - 1)
    }

    return (
        <section className="py-16">
            <div className="mx-auto container xl:max-w-305 ">
                <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
                    {/* LEFT COLUMN */}
                    <div>
                        <h2 className="text-[44px] font-bold text-text-primary leading-none">
                            Automate Your <br />
                            <span className="text-[53px] font-bold text-[#40E1D1]">Dealership Operations</span>
                        </h2>
                        <p className="mt-3 max-w-md text-[20px] font-normal text-text-primary leading-tight">
                            Get started and join dealerships achieving these results every month:
                        </p>

                        <div className="mt-8 space-y-6">
                            <FeatureCard
                                icon={<LottieAnimation animationData={clockAnimation} className="w-10 h-10" />}
                                title="Never Miss a Call"
                                desc={<>Our AI responds instantly, <strong>24/7</strong>, answering every call</>}
                                step='Step 1'
                            />
                            <FeatureCard
                                icon={<LottieAnimation animationData={calendarAnimation} className="w-10 h-10" />}
                                title="Book More Service"
                                desc={<>Schedule <strong>180+</strong> additional appointments monthly</>}
                                step='Step 2'
                            />
                            <FeatureCard
                                icon={<LottieAnimation animationData={revenueGrowthAnimation} className="w-10 h-10" />}
                                title="Grow Revenue"
                                desc={<>Generate an additional <strong>$30,000</strong> in monthly revenue</>}
                                step='Step 3'
                            />
                            <FeatureCard
                                icon={<LottieAnimation animationData={equalityAnimation} className="w-10 h-10" />}
                                title="Free Your Team"
                                desc={<>Reclaim <strong>40+</strong> hours of staff time monthly</>}
                                step='Step 4'
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="rounded-3xl bg-surface border-4 border-white p-5 shadow-sm mt-10">
                        {/* Heading & Logo Scroller */}
                        <div className="text-center mt-6">
                            <h3 className="text-[38px] font-bold text-text-primary leading-none">
                                Schedule a <span className="text-[#40E1D1]">Demo</span>
                            </h3>
                            <p className=" mt-2 text-[22px] font-medium text-text-primary leading-none">
                                Automate your operations like these dealerships:
                            </p>

                            <div className="h-[4px] w-[420px] mt-5 mx-auto bg-linear-to-r from-gray-300 via-primary to-gray-300 [clip-path:polygon(0%_33%,_50%_0%,_100%_33%,_100%_66%,_50%_100%,_0%_66%)]" />

                            {/* Placeholder for logos */}
                            <InfiniteImageScroller images={logos} speed={10} />
                        </div>

                        {/* FORM */}
                        <div className={` ${currentForm === 1 ? 'h-61' : currentForm === 2 ? 'h-124.5' : currentForm === 3 ? 'h-115' : currentForm === 4 ? 'h-80' : 'h-80'} rounded-2xl border-2 border-[#40E1D1]/30 bg-surface shadow-sm p-5 transition-all duration-500`}>
                            <VerticalTextSlider
                                paraText={<><span className='font-semibold'>PrimeSync</span> is accepting meetings with</>}
                                paraClasses='text-text-primary text-base'
                                slideItems={[
                                    { text: "Car Dealership", color: "text-[#40E1D1]" },
                                    { text: "Plumbing", color: "text-[#DA1A41]" },
                                    { text: "Property Preservation", color: "text-[#657DDF]" },
                                    { text: "HVAC", color: "text-[#FC7E00]" },
                                    { text: "Auto Repair", color: "text-[#45C9AF]" },
                                    { text: "Insurance", color: "text-[#FF6200]" },
                                ]} />

                            <p className="mt-1 text-text-primary text-base italic leading-none">
                                Please email <span className="font-semibold">info@primesync.com</span> for all other inquiries.
                            </p>

                            <form className='relative'>
                                <Form1 currentForm={currentForm} handleNextForm={handleNextForm} />
                                <button
                                    type="button"
                                    className={` absolute items-center gap-2 bg-[#40E1D1]  text-base rounded-md font-medium text-white transition-all  cursor-pointer ${currentForm === 1 ? 'translate-x-[398px] translate-y-[20px] py-[13px] px-[20px] duration-2000' : currentForm === 2 ? 'translate-x-[0px] translate-y-[371px] px-5 py-2 duration-2000' : 'translate-x-[0px] translate-y-[338px] px-5 py-2'}
                                    ${currentForm === 4 ? "hidden opacity-0" : "flex hover:opacity-90 opacity-100"} starting:opacity-0`}
                                    onClick={currentForm === 3 ? handlePrevForm : handleNextForm}
                                >
                                    {currentForm === 3 ? <ArrowLeft size={18} /> : <></>}
                                    {currentForm === 3 ? 'Previous' : 'Next'}
                                    {currentForm === 1 ? <ArrowUpRight size={18} /> : currentForm === 2 ? <ArrowRight size={18} /> : <></>}
                                </button>

                                <button
                                    type="button"
                                    className={`flex  absolute px-6 py-2 items-center gap-2 bg-[#40E1D1]  text-base rounded-md font-medium text-white transition-all transition-discrete duration-1500 starting:opacity-0 ${currentForm !== 3 ? "translate-x-0 translate-y-[338px]  opacity-0 disabled " : ' translate-x-[140px] translate-y-[338px] hover:opacity-90 cursor-pointer opacity-100'} `}
                                    onClick={handleNextForm}
                                >

                                    Submit <ArrowRight size={18} />

                                </button>
                                <Form2 currentForm={currentForm} />
                                <Form3 currentForm={currentForm} />
                                <Form4 currentForm={currentForm} />
                                {/* Form Bottom Section  */}
                                <div className={`absolute inline-block right-0  z-10 mt-5    flex-wrap items-center justify-between gap-4 transition-discrete   ${currentForm === 1 ? "translate-y-25" : currentForm === 2 ? "translate-y-88" : 'translate-y-80'}
                                ${currentForm === 3 ? "duration-500" : "duration-2000"}
                                ${currentForm === 4 ? "hidden opacity-0" : "flex opacity-100"} starting:opacity-0`
                                }>
                                    {/* Left buttons */}
                                    {/* <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 bg-[#40E1D1] text-white px-5 py-2 rounded-md text-sm font-medium shadow"
                                            onClick={handlePrevForm}>
                                            ← Previous
                                        </button>

                                        <button className="flex items-center gap-2 bg-[#40E1D1] text-white px-6 py-2 rounded-md text-sm font-medium shadow"
                                            onClick={handleNextForm}>
                                            Submit →
                                        </button>
                                    </div> */}

                                    {/* Right indicators */}
                                    <div className="flex items-center gap-3">
                                        {/* dots */}
                                        <div className="flex items-center gap-1">
                                            <span className={`w-2 h-2 rounded-full ${currentForm === 1 ? 'bg-[#40E1D1]' : 'bg-gray-300'} `} />
                                            <span className={`w-2 h-2 rounded-full ${currentForm === 2 ? 'bg-[#40E1D1]' : 'bg-gray-300'} `} />
                                            <span className={`w-2 h-2 rounded-full ${currentForm === 3 ? 'bg-[#40E1D1]' : 'bg-gray-300'} `} />
                                        </div>

                                        {/* arrow */}
                                        <button
                                            aria-label="Next step"
                                            className="w-8 h-8 flex items-center justify-center  hover:bg-gray-100 transition"
                                        >
                                            ▶
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    desc,
    step,
}: {
    icon: React.ReactNode
    title: string
    desc: React.ReactNode
    step: string
}) {
    return (
        <div className="relative group flex items-center gap-4 rounded-2xl bg-[#f6f6f6] p-2 shadow-sm border-4 border-white">
            <div className='absolute flex items-start justify-center bg-primary text-white italic px-4  w-[90px] h-[30px] rounded-lg translate-x-1 -translate-y-8 -z-1 group-hover:-translate-y-11 transition-all duration-300'>
                <span className='text-sm pt-1 group-hover:pt-0 transition-all duration-300'>{step}</span>
            </div>
            <div className='ml-3 h-10 w-10 rounded-full text-[#40E1D1] flex  items-center justify-center group-hover:scale-150 transition-all duration-300'>
                {icon}
            </div>

            <div className="relative flex-1 pl-4 group-hover:translate-x-3 transition-all duration-300">
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#40E1D1]/40" />
                <h4 className="text-xl font-bold text-[#1f2d2b] group-hover:text-primary transition-all duration-300">{title}</h4>
                <p className="mt-1 text-base text-[#5f6f73]">{desc}</p>
            </div>
        </div>
    )
}
