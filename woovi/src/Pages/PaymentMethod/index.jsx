import React, { useContext } from "react"
import { PaymentContext } from "../../Context"

export default function PaymentMethodPage() {
    const { counter, setCounter} = useContext(PaymentContext)
    return (
        <div className="">
            <button onClick={() => setCounter(counter - 1)}>-</button>
                {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}