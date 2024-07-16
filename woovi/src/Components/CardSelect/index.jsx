import React from "react"
import Checkbox from "@mui/material/Checkbox"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Flag from "../Flag";
import { formattedValue } from "../../Utils";

const CardSelect = ({
    variant = 'primary', 
    borderTopRounded = false, 
    borderBottomRounded = false,
    infos,
    selected,
    ...rest
}) => {
    const {installmentsNumber, installmentsValue, cashback, interest} = infos
    

    const SubtitleStyle = () => {
        if(variant == "primary" || variant == "secondary") {
            return "text-gray-300 text-md font-normal"
        }
        else {
            return "text-primary-200 font-semibold text-md"
        }
    }

    const DefineTextFlag = () => {
        if(variant == "secondary") {
            return {text: "Melhor opção de parcelamento", boldText: `-${interest}% de juros:`}
        }
        else {
            return {text: "de volta no seu Pix na fon", boldText: `🤑 ${formattedValue(installmentsValue * cashback / 100)}`}
        }
    }

    return (
        <div {...rest} className={`w-full h-fit flex flex-col gap-2 p-5 ${selected ? "border-2 border-primary-200 bg-primary-100" : "border border-gray-100"} ${borderTopRounded && 'rounded-t-xl'} ${borderBottomRounded && 'rounded-b-xl'}`}>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                    <h1 className="w-full gap-1 flex text-lg text-gray-400">
                        <span className="font-extrabold">{installmentsNumber}x</span>
                        <span className="font-normal">{formattedValue(installmentsValue)}</span>
                    </h1>
                    {variant == "tertiary" && <p className={SubtitleStyle()}>Ganhe {cashback}% de Cashback</p>}
                    {(variant == "primary" || variant == "secondary") && <p className={SubtitleStyle()}>Total: {formattedValue(installmentsNumber * installmentsValue)}</p>}
                </div>
                <Checkbox
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