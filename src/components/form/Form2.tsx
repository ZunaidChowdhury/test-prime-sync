'use client'

type Form2Props = {
    currentForm: number;
    handleNextForm?: () => void;
}

export default function Form2({ currentForm, handleNextForm }: Form2Props) {
    return (
        // <div className={`w-full max-w-[520px] mx-auto mt-5 space-y-4 transition-all transition-discrete duration-500 ${currentForm === 2 ? "block opacity-100" : "hidden opacity-0"}
        <div className={`w-full max-w-[520px] mx-auto mt-5 absolute space-y-4 transition-all transition-discrete duration-2000
            ${currentForm === 2 ? "block opacity-100" : "hidden opacity-0"} starting:opacity-0`}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium">
                        First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full h-11 rounded-md border border-[#40E1D1] px-3 outline-none"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="mt-1 w-full h-11 rounded-md border border-[#40E1D1] px-3 outline-none"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="text-sm font-medium">
                    Company Email<span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    placeholder="Enter your Company Email..."
                    className="mt-1 w-full h-11 rounded-md border border-[#40E1D1] px-3 outline-none"
                />
            </div>

            {/* Phone */}
            <div>
                <label className="text-sm font-medium">
                    Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex h-11 rounded-md border border-[#40E1D1] overflow-hidden py-3">
                    <span className="px-3 flex items-center text-sm">CA</span>

                    <div className="relative flex items-center">
                        <span className="absolute left-0 top-0 h-full w-px bg-[#40E1D1]/40" />
                        <span className="px-3 flex items-center text-sm">+380</span>
                    </div>

                    <input
                        type="tel"
                        className="flex-1 px-3 outline-none"
                    />
                </div>
            </div>

            {/* Dealership */}
            <div>
                <label className="text-sm font-medium">
                    Dealership Name<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="mt-1 w-full h-11 rounded-md border border-[#40E1D1] px-3 outline-none"
                />
            </div>

            {/* Button */}
            {/* <button className="mt-4 inline-flex items-center gap-2 bg-[#40E1D1] text-white px-6 py-2 rounded-md font-medium">
                Next →
            </button> */}
        </div>
    )
}
