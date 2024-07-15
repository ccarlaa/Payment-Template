import React, { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Flag from "../Flag";

const CardSelect = ({variant = 'primary', borderTopRounded = false, borderBottomRounded = false}) => {
    console.log(variant)
    const [selected, setSelect] = useState(false);
    

    const SubtitleStyle = () => {
        if(variant == "primary") {
            return "text-gray-300 text-md font-normal"
        }
        else {
            return "text-primary-200 font-semibold text-md"
        }
    }

    const DefineTextFlag = () => {
        if(variant == "secondary") {
            return {text: "Melhor opção de parcelamento", boldText: "-3% de juros:"}
        }
        else {
            return {text: "de volta no seu Pix na fon", boldText: "🤑 R$ 300,00"}
        }
    }

    return (
        <div onClick={() => setSelect(!selected)} className={`w-full h-fit flex flex-col gap-2 p-5 ${selected ? "border-2 border-primary-200 bg-primary-100" : "border border-gray-100"} ${borderTopRounded && 'rounded-t-xl'} ${borderBottomRounded && 'rounded-b-xl'}`}>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h1 className="w-full gap-1 flex text-lg text-gray-400">
                        <span className="font-extrabold">1x</span>
                        <span className="font-normal">R$ 30,500,00</span>
                    </h1>
                    <p className={SubtitleStyle()}>Ganhe 3% de Cashback</p>
                </div>
                <Checkbox
                    onClick={() => setSelect(!selected)}
                    checked={selected}
                    icon={<RadioButtonUncheckedIcon style={{fill: "#E5E5E5"}}/>}
                    checkedIcon={<CheckCircleIcon />}
                />            
            </div>
            {variant != "primary" && <Flag text={DefineTextFlag().text} boldText={DefineTextFlag().boldText}/>}
        </div>
    )
}

export default CardSelect