'use client'

import { PhoneCall, CalendarCheck, TrendingUp, Users, ArrowRight } from 'lucide-react'

export default function AutomateSection() {
    return (
        <section className="py-16">
            <div className="mx-auto container xl:max-w-305 ">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.12fr]">
                    {/* LEFT COLUMN */}
                    <div>
                        <h2 className="text-[44px] font-bold text-text-primary leading-none">
                            Automate Your <br />
                            <span className="text-[53px] font-bold text-[#40E1D1]">Dealership Operations</span>
                        </h2>
                        <p className="mt-3 max-w-md text-[20px] font-normal text-text-primary leading-tight">
                            Get started and join dealerships achieving these results every month:
                        </p>

                        <div className="mt-8 space-y-4">
                            <FeatureCard
                                icon={<PhoneCall size={20} />}
                                title="Never Miss a Call"
                                desc={<>Our AI responds instantly, <strong>24/7</strong>, answering every call</>}
                            />
                            <FeatureCard
                                icon={<CalendarCheck size={20} />}
                                title="Book More Service"
                                desc={<>Schedule <strong>180+</strong> additional appointments monthly</>}
                            />
                            <FeatureCard
                                icon={<TrendingUp size={20} />}
                                title="Grow Revenue"
                                desc={<>Generate an additional <strong>$30,000</strong> in monthly revenue</>}
                            />
                            <FeatureCard
                                icon={<Users size={20} />}
                                title="Free Your Team"
                                desc={<>Reclaim <strong>40+</strong> hours of staff time monthly</>}
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="rounded-3xl bg-white p-8 shadow-sm">
                        <h3 className="text-2xl font-semibold text-[#1f2d2b]">
                            Schedule a <span className="text-[#40E1D1]">Demo</span>
                        </h3>
                        <p className="mt-3 text-sm text-[#5f6f73]">
                            Automate your operations like these dealerships:
                        </p>

                        {/* Placeholder for logos */}
                        <div className="mt-6 flex flex-wrap items-center gap-6 opacity-80">
                            <div className="h-8 w-24 rounded bg-gray-200" />
                            <div className="h-8 w-24 rounded bg-gray-200" />
                            <div className="h-8 w-24 rounded bg-gray-200" />
                        </div>

                        <div className="mt-8 rounded-2xl border border-[#40E1D1]/30 bg-[#f7fffe] p-5">
                            <p className="text-sm text-[#1f2d2b]">
                                PrimeSync is accepting meetings with{' '}
                                <span className="font-semibold text-[#e55353]">Plumbing</span>
                            </p>
                            <p className="mt-1 text-xs text-[#5f6f73]">
                                Please email <span className="font-medium">info@primesync.com</span> for all other inquiries.
                            </p>

                            <form className="mt-4">
                                <div className="flex overflow-hidden rounded-xl border border-[#40E1D1]/40 bg-white">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your Company Email..."
                                        className="w-full px-4 py-3 text-sm outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 bg-[#40E1D1] px-5 text-sm font-medium text-black transition hover:opacity-90"
                                    >
                                        Next <ArrowRight size={16} />
                                    </button>
                                </div>
                                <p className="mt-2 text-xs text-[#e55353]">
                                    Please complete this required field
                                </p>
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
}: {
    icon: React.ReactNode
    title: string
    desc: React.ReactNode
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl bg-[#f6f6f6] p-2 shadow-sm border-4 border-white">
            <div className='ml-2 h-10 w-10 rounded-full bg-[#e9fffd] text-[#40E1D1] flex  items-center justify-center'>
                {icon}
            </div>

            <div className="relative flex-1 pl-4">
                <span className="absolute left-0 top-0 h-full w-px bg-[#40E1D1]/40" />
                <h4 className="text-xl font-bold text-[#1f2d2b]">{title}</h4>
                <p className="mt-1 text-base text-[#5f6f73]">{desc}</p>
            </div>
        </div>
    )
}
