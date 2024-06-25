import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


//creating router using createBrowserRouter()

const router = createBrowserRouter([
  {
    path:'/'
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> //we only have to render the router, which will paint all the pages connected to it.
  </React.StrictMode>,
)
