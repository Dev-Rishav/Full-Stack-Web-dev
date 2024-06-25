import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About Us/About'


//creating router using createBrowserRouter()

const router = createBrowserRouter([
  {
    path:'/',       //root path is given
    element: <Layout/>,   //This will render the static components like header and footer 
    children: [
      {
        path:"",      //home path or the component that will be render on "/"
        element: <Home/>    
      },
      {
        path:"about",   //about will be rendered on  "/about"
        element: <About/>
      }
    
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> //we only have to render the router, which will paint all the pages connected to it.
  </React.StrictMode>,
)
