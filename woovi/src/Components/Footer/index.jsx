import React from "react"
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import GrayLogo from "../../assets/gray_logo.svg"

const Footer = () => {
    return (
        <footer className="py-7 w-full flex justify-center items-center gap-2">
            <GppMaybeOutlinedIcon  className="text-gray-200"/>
            <p className="text-gray-200 text-center text-sm font-semibold">Pagamento 100% seguro via:</p>
            <img src={GrayLogo} alt="logo" />
        </footer>
    )
}

export default Footer