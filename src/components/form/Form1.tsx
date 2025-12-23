'use client'

import { ArrowUpRight } from 'lucide-react'
import React from 'react'

type Form1Props = {
    currentForm: number;
    handleNextForm: () => void;
}

const Form1 = ({ currentForm, handleNextForm }: Form1Props) => {
    
    return (
        <div className={`mt-5 absolute  left-0 right-0 transition-all transition-discrete duration-2000 
            ${currentForm === 1 ? "block opacity-100" : "hidden opacity-0"} starting:opacity-0`}>
            <div className="flex overflow-hidden rounded-md border border-[#40E1D1]/40 ">
                <input
                    type="email"
                    required
                    placeholder="Enter your Company Email..."
                    className="w-full bg-white px-4 py-3 text-base outline-none"
                />
                {/* <button
                    type="button"
                    className="flex items-center gap-2 bg-[#40E1D1] px-5 text-base rounded-md font-medium text-white transition hover:opacity-90 cursor-pointer"
                    onClick={handleNextForm}
                >
                    Next <ArrowUpRight size={18} />
                </button> */}
            </div>
            <p className="mt-2 text-base text-[#e55353]">
                Please complete this required field
            </p>
        </div>
    )
}

export default Form1