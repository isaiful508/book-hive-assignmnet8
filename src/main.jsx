import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesToRead from './components/PagesToRead/PagesToRead'
import MainLayouts from './components/MainLayouts/MainLayouts'


const router =createBrowserRouter([
  {
    path:'/',
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pages-to-read',
        element:<PagesToRead></PagesToRead>
      }
    ]

  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
