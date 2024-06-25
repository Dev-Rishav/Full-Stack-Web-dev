import React from 'react'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from 'react-router-dom'

//All this stuff can be done in app.jsx but for the sake of better code quality we will use layout
const Layout = () => {
    return (
        <>
            <Header />  
                {/* //header wont change dynamically */}
            <Outlet/>   
                {/* Basically outlet let us dynamically update components and elements inside it without re rendering the other two components that is <Header/> and <Footer/> */}
            <Footer />  
                /* //footer wont change dynamically */}
        </>
    )
}

export default Layout