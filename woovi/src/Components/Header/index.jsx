import React from "react";
import Logo from "../../assets/logo.svg"

const Header = ({title = "Título"}) => {
    return (
        <header className="w-full h-fit flex items-center flex-col gap-10">
            <img src={Logo} alt="logo"  className="h-9"/>
            <h1 className="text-center text-gray-400 text-lg font-extrabold">{title}</h1>
        </header>
    )
}

export default Header