import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { Toaster } from 'react-hot-toast'
import { Context } from './components/Context/Context'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Context>
   <RouterProvider router={router}></RouterProvider>
   </Context>
    <Toaster></Toaster>
   
  </React.StrictMode>,
)
