import React, { useContext, useState } from "react"
import CardSelect from "../../Components/CardSelect";
import Layout from "../../Components/Layout";
import { PaymentContext } from "../../Context";

const PaymentMethodPage = () => {
    const {selected, setSelected, payments} = useContext(PaymentContext)
    return (
        <Layout title="João, como você quer pagar?">
            <div className="relative">
                <CardSelect onClick={() => setSelected(0)} selected={selected == 0 ? true : false} variant="tertiary" infos={payments[0]} borderBottomRounded={true} borderTopRounded={true}/>
                <div className="absolute -top-3 px-4 bg-gray-100 rounded-full left-5">
                    <p className="text-gray-400 font-extrabold text-md text-center">Pix</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -top-3 px-4 bg-gray-100 rounded-full left-5">
                    <p className="text-gray-400 font-extrabold text-md text-center">Pix Parcelado</p>
                </div>
                {payments.map((infos, index) => {
                    if(index == 0) {
                        return
                    }
                    if(infos.interest != 0) {
                        return (
                            <CardSelect selected={selected == index ? true : false} onClick={() => setSelected(index)} infos={infos} variant="secondary" borderTopRounded={index == 0 ? true : false} />
                        )
                    }
                    else {
                        return (
                            <CardSelect selected={selected == index ? true : false} onClick={() => setSelected(index)} infos={infos} variant="primary"  borderTopRounded={index == 1 ? true : false} borderBottomRounded={index == payments.length - 1 ? true : false}/>
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default PaymentMethodPage