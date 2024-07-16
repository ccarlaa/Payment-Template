import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { formattedValue } from "../../Utils";

const StepperComponent = ({variant = "primary", payment}) => {
    const auxArray = Array.from({ length: payment.installmentsNumber - 1});

    return (
        <Stepper className='w-full' orientation="vertical">
            {auxArray.map((_, index) => {
                return (
                    <Step activeStep={0} key={index}>
                        <StepLabel
                        StepIconComponent={() => {
                            return (
                                <>
                                {
                                    variant == "secondary" && ( index === 0 ? <CheckCircleIcon color="primary" /> : <RadioButtonUncheckedIcon color="primary" />)
                                }
                                {
                                    variant == "primary" && <RadioButtonUncheckedIcon color={index == 0 ? "primary" : "gray"}/>
                                }
                                </>
                            )
                        }}
                        sx={{ padding: 0 }}>
                            <div className='flex justify-between w-full'>
                                <p className='text-gray-400 text-md font-semibold'>{index > 0  ? `${index + 1}ª no cartão` : `${index + 1}ª entrada no Pix`}</p>
                                <p className='text-gray-400 text-md font-extrabold'>{formattedValue(payment.installmentsValue)}</p>
                            </div>
                        </StepLabel>
                    </Step>
                )
            })}
        </Stepper>
    )
}

export default StepperComponent;