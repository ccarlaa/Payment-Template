import React, { useContext } from "react"
import { PaymentContext } from "../../Context"
import CardSelect from "../../Components/CardSelect";

export default function PaymentMethodPage() {
    const { counter, setCounter} = useContext(PaymentContext)
    return (
        <div className="">
            <button onClick={() => setCounter(counter - 1)}>-</button>
                {counter}

            <button onClick={() => setCounter(counter + 1)}>+</button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <CardSelect />
        </div>
    )
}