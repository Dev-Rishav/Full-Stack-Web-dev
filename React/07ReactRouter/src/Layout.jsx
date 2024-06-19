import React from 'react'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>   
            {/* Basically outlet let us dynamically update components and elements inside it without re rendering the other two components that is <Header/> and <Footer/> */}
            <Footer />
        </>
    )
}

export default Layout