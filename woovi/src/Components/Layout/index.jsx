import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children, title="Título"}) => {
    return (
        <div className="px-4 py-9 w-full flex flex-col gap-8">
            <Header title={title} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout