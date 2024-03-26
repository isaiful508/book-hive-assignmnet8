import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts/MainLayouts";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishLists from "../components/WishLists/WishLists";


export const router =createBrowserRouter([
    {
      path:'/',
      element:<MainLayouts></MainLayouts>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/listed-books',
          element:<ListedBooks></ListedBooks>,
          children:[
            {
                index:true,
                element:<ReadBooks></ReadBooks>,
            },
            {
                path:'wishlist',
                element:<WishLists></WishLists>
            },
          ],
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