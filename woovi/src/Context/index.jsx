import React, { createContext, useState } from 'react';

export const PaymentContext = createContext({});

export const PaymentProvider = ({ children }) => {
    const [counter, setCounter] = useState(1)
    return (
        <PaymentContext.Provider
            value = {{
                setCounter,
                counter
            }}
        >
            { children }
        </PaymentContext.Provider>
    )
}