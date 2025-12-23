'use client'

const options = [
    'Internet Search',
    'Social Media',
    'Word of Mouth Referral',
    'News Article',
    'Event or Tradeshow',
    'Other',
]

type Form3Props = {
    currentForm: number;
    handleNextForm?: () => void;
}

export default function FormStepTwo({ currentForm, handleNextForm }: Form3Props) {
    return (
        <div className={`w-full  mt-5 mx-auto space-y-4 absolute transition-all transition-discrete  duration-2000
            ${currentForm === 3 ? "block opacity-100" : "hidden opacity-0"} starting:opacity-0`}>
            <h3 className="font-semibold text-base">
                How did you hear about us?<span className="text-red-500">*</span>
            </h3>

            {/* Radio options */}
            <div className="space-y-2">
                {options.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="source"
                            className="accent-[#40E1D1]"
                        />
                        {item}
                    </label>
                ))}
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="mt-4 w-full max-w-[280px] border rounded-md overflow-hidden">
                <div className="bg-blue-600 text-white text-xs px-3 py-2">
                    protected by reCAPTCHA
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-xs">
                    <span>Privacy · Terms</span>
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex items-center gap-3 pt-4">
                <button className="flex items-center gap-1 bg-[#40E1D1] text-white px-5 py-2 rounded-md text-sm">
                    ← Previous
                </button>

                <button className="flex items-center gap-1 bg-[#40E1D1] text-white px-5 py-2 rounded-md text-sm">
                    Submit →
                </button>
            </div> */}
        </div>
    )
}
