import React from "react"

const Flag = ({text = "texto", boldText = "texto em destaque"}) => {
    return (
        <div className="w-full bg-secondary p-2 pr-10 relative rounded-l-md">
            <p className="w-full text-white whitespace-nowrap text-sm flex gap-1.5">
                <span className="font-extrabold text-ellipsis">{boldText}</span>
                <span className="font-normal overflow-hidden text-ellipsis ">{text}</span>
            </p>
            <svg className=" absolute top-0 -right-1 w-6 h-10">
                <polygon 
                    points="4 18,25 37,21 4"  
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