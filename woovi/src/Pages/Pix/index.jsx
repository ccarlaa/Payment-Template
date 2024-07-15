import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import { PaymentContext } from '../../Context';
import { formattedValue } from '../../Utils';
import QRCode from '../../assets/qrcode.svg'
import Button from '@mui/material/Button';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

const steps = [
    {
      label: '1ª entrada no Pix',
    },
    {
      label: '2ª no cartão',
    },
  ];

export default function PixPage() {
    const {selected, payments} = useContext(PaymentContext)
    const navigate = useNavigate();

    return (
        <Layout title={`João, pague a entrada de ${formattedValue(payments[selected].installmentsValue / 2)} pelo Pix`} >
            <div className='flex flex-col gap-5 items-center w-full'>
                <div className='w-80 h-80 border-2 border-primary-200 p-2 rounded-lg'>
                    <img src={QRCode} alt="QRCode" />
                </div>
                <Button onClick={() => navigate('/pix')} variant="contained" color="secondary"><span className="text-white text-MD font-normal normal-case">Clique para copiar QR CODE <CopyAllIcon /></span></Button>
                <div>
                    <p className='font-semibold text-gray-200 text-sm text-center'>Prazo de pagamento:</p>
                    <p className='font-extrabold text-gray-400 text-sm text-center'>15/12/2021 - 08:17</p>
                </div>
                <Stepper className='w-full' orientation="vertical">
                    {steps.map((step, index) => (
                    <Step activeStep={0} key={step.label}>
                        <StepLabel StepIconComponent={() => <RadioButtonUncheckedIcon color={index == 0 ? "primary" : "gray"}/>} sx={{padding: 0}}>
                            <div className='flex justify-between w-full'>
                                <p className='text-gray-400 text-md font-semibold'>{step.label}</p>
                                <p className='text-gray-400 text-md font-extrabold'>{formattedValue(payments[selected].installmentsValue / 2)}</p>
                            </div>
                        </StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <div className='w-full h-[2px] bg-gray-100' />
                <div className='flex justify-between w-full'>
                    <p className='text-gray-400 text-sm font-semibold'>CET: 0,5%</p>
                    <p className='text-gray-400 text-md font-semibold'>Total: {formattedValue(payments[selected].installmentsValue)}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='w-full h-[2px] bg-gray-100 mb-2' />
                    <Accordion 
                        className='w-full' 
                        sx={{ 
                            '&:before': {
                                display: 'none',
                            },
                            boxShadow: 'none',
                            border: 'none',
                        }}> 
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{padding: 0}}
                            >
                            <p className='text-gray-400 font-extrabold text-sm'>Como funciona?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-gray-400 font-normal text-sm'>Informações do PIX</p>
                        </AccordionDetails>
                    </Accordion>
                    <div className='w-full h-[2px] bg-gray-100 mt-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-gray-200 text-sm'>Identificador:</p>
                    <p className='font-extrabold text-gray-400 text-sm'>2c1b951f356c4680b13ba1c9fc889c47</p>
                </div>
                <Button onClick={() => navigate('/credit-card')} className='w-full' variant="contained" color="secondary"><span className="text-white text-lg font-normal normal-case">Continue</span></Button>
            </div>
        </Layout>
    )
}