import React from "react"

const Flag = ({text = "texto", boldText = "texto em destaque"}) => {
    return (
        <div className="w-full bg-secondary p-2 relative rounded-l-md">
            <p className="text-white text-md flex gap-1.5">
                <span className="font-extrabold">{boldText}</span>
                <span className="font-normal">{text}</span>
            </p>
            <svg className=" absolute top-0 right-0 w-6 h-10">
                <polygon 
                    points="4 20,25 36,25 4"  
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    stroke="white" 
                    strokeWidth="4"
                    className="fill-white"
                />
            </svg>
        </div>
    )
}

export default Flag