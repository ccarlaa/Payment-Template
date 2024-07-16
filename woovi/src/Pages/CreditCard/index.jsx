import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import { PaymentContext } from "../../Context";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { formattedValue } from '../../Utils';
import Button from '@mui/material/Button';
import AccordionComponent from '../../Components/AccordionComponent';
import StepperComponent from '../../Components/StepperComponent';

const CreditCardPage = () => {
    const { selected, payments } = useContext(PaymentContext);
    const auxArray = Array.from({ length: payments[selected].installmentsNumber - 1});

    return (
        <Layout title={`João, pague o restante em ${payments[selected].installmentsNumber - 1} no cartão`}>
            <div className='w-full flex flex-col gap-4'>
                <TextField id="outlined-basic" label="Nome completo" variant="outlined" />
                <TextField id="outlined-basic" label="CPF" variant="outlined" />
                <TextField id="outlined-basic" label="Número do cartão" variant="outlined" />
                <div className='grid grid-cols-2 gap-4'>
                    <TextField id="outlined-basic" label="Vencimento" variant="outlined" />
                    <TextField id="outlined-basic" label="Vencimento" variant="outlined" />
                </div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Parcelas"
                    >
                        {auxArray.map((_, index) => {
                            return (
                                <MenuItem key={index} value={index}>{index + 1}x de {formattedValue(payments[selected].installmentsValue)}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button className='w-full' variant="contained" color="secondary"><span className="text-white text-lg font-normal normal-case">Pagar</span></Button>
                <div>
                    <p className='font-semibold text-gray-200 text-sm text-center'>Prazo de pagamento:</p>
                    <p className='font-extrabold text-gray-400 text-sm text-center'>15/12/2021 - 08:17</p>
                </div>
                <div className='w-full h-[2px] bg-gray-100' />
                <StepperComponent variant='secondary' payment={payments[selected]}/>
                <div className='flex justify-between w-full'>
                    <p className='text-gray-400 text-sm font-semibold'>CET: 0,5%</p>
                    <p className='text-gray-400 text-md font-semibold'>Total: {formattedValue(payments[selected].installmentsValue * payments[selected].installmentsNumber)}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='w-full h-[2px] bg-gray-100 mb-2' />
                    <AccordionComponent label="Como funciona" text='Descrição' />
                    <div className='w-full h-[2px] bg-gray-100 mt-2' />
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-gray-200 text-sm'>Identificador:</p>
                    <p className='font-extrabold text-gray-400 text-sm'>2c1b951f356c4680b13ba1c9fc889c47</p>
                </div>
            </div>
        </Layout>
    )
}

export default CreditCardPage