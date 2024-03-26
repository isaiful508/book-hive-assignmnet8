import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesToRead from './components/PagesToRead/PagesToRead'
import MainLayouts from './components/MainLayouts/MainLayouts'
import BookDetails from './components/BookDetails/BookDetails'


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
      },
      {
        path:'book-details/:id',
        element:<BookDetails></BookDetails>,
        loader:({params}) => fetch(`/books.json?id=${params.id}`).then(res =>{
          if(!res.ok){
            throw new Error('Faild to load fetch book details');
          }
          return res.json();
        }),
      }
    ]

  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>,
)
