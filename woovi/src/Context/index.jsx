import React, { createContext, useState } from 'react';

export const PaymentContext = createContext({});

const payments = [
    {
        installmentsNumber: 1,
        installmentsValue: 30500.00,
        cashback: 3,
        interest: 0
    },
    {
        installmentsNumber: 2,
        installmentsValue: 15500.00,
        cashback: 0,
        interest: 0
    },
    {
        installmentsNumber: 3,
        installmentsValue: 10196.66,
        cashback: 0,
        interest: 0
    },
    {
        installmentsNumber: 3,
        installmentsValue: 10196.66,
        cashback: 0,
        interest: 0
    },
    {
        installmentsNumber: 4,
        installmentsValue: 7725.00,
        cashback: 0,
        interest: 3
    },
    {
        installmentsNumber: 5,
        installmentsValue: 6300.00,
        cashback: 0,
        interest: 0
    },  
    {
        installmentsNumber: 6,
        installmentsValue: 5283.33,
        cashback: 0,
        interest: 0
    },  
    {
        installmentsNumber: 7,
        installmentsValue: 4542.85,
        cashback: 0,
        interest: 0
    },  
]

export const PaymentProvider = ({ children }) => {
    const [selected, setSelected] = useState(null);

    return (
        <PaymentContext.Provider
            value = {{
                payments,
                selected,
                setSelected
            }}
        >
            { children }
        </PaymentContext.Provider>
    )
}