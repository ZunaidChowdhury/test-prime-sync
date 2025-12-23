import React from 'react'

type Form4Props = {
    currentForm: number;
}

const Form4 = ({ currentForm }: Form4Props) => {
    return (
        <div className={`w-full mx-auto mt-5 absolute space-y-4 transition-all transition-discrete duration-2000
            ${currentForm === 4 ? "block opacity-100" : "hidden opacity-0"} starting:opacity-0`}>
            <div className="text-center mt-12">
                <h3 className="text-[38px] font-bold text-text-primary leading-none">
                    Form submitted
                </h3>
                <p className=" mt-2 text-[22px] font-medium text-text-primary leading-none">
                    Thank you, we'll be in touch shortly.
                </p>

            </div>
        </div >
    )
}

export default Form4