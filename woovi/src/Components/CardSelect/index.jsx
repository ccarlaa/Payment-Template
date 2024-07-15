import React from "react"
import Checkbox from "@mui/material/Checkbox"

const Flag = () => {
    return (
        <div className="w-full bg-secondary p-2 relative rounded-l-md">
            <p className="text-white text-md flex gap-1.5">
                <span className="font-extrabold">🤑 R$ 300,00</span>
                <span className="font-normal">de volta no seu Pix na hora</span>
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

export default function CardSelect() {
    return (
        <div className="w-full h-fit border border-gray-100 rounded-lg p-5">
            <div>
                <div>
                    <h1 className="w-full gap-1 flex text-lg text-gray-400">
                        <span className="font-extrabold">1x</span>
                        <span className="font-normal">R$ 30,500,00</span>
                    </h1>
                    <p className="text-primary font-semibold text-md">Ganhe 3% de Cashback</p>
                </div>
                <Checkbox color="primary" sx={{borderColor: "orange"}} />
            </div>
            <Flag />

        </div>
    )
}