import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentMethodPage from "../Pages/PaymentMethod";
import PixPage from "../Pages/Pix";
import CreditCardPage from "../Pages/CreditCard";
import { PaymentProvider } from "../Context";

export default function Router() {
    return (
        <BrowserRouter>
            <PaymentProvider>
                <Routes>
                    <Route path="/" element={<PaymentMethodPage />}/>
                    <Route path="/pix" element={<PixPage />}/>
                    <Route path="/credit-card" element={<CreditCardPage />}/>
                </Routes>
            </PaymentProvider>
        </BrowserRouter>
	)
}