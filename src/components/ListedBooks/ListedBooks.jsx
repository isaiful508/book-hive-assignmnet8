import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { getItem } from "../utility/localstorage";

const ListedBooks = () => {


  //   const [tabIndex, setTabIndex] = useState(0);
  //   const [sortby, setSortBy] =useState(null);
  //   const [sortedBooks, setSortedBooks] = useState([]);

  //   //get data from localstorage
  //   useEffect(() => {
  //     const booksFromLocalStorage = getItem('readed');
  //     // console.log(booksFromLocalStorage);
      

  // }, []);

  
  // //sorted function
  // const booksSort = (bookProp) => {
  //   const sorted = [...sortedBooks]; // Use sortedBooks directly
  //   if(bookProp === "rating"){
  //     sorted.sort((a,b) => b.rating - a.rating);
  //   } else if (bookProp === "totalPages"){
  //     sorted.sort((a,b) => b.totalPages - a.totalPages);
  //   } else if(bookProp === "yearOfPublishing"){
  //     sorted.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
  //   }
  //   setSortedBooks(sorted);
  //   console.log(sorted);
  // }  


  // //handle sorted book
  // const handleSortBtn = (bookProp) => {
  //   setSortBy(bookProp);
  //   console.log(sortby);
  //   booksSort(bookProp); // Call booksSort with the bookProp parameter
  // }


  const [tabIndex, setTabIndex] = useState(0);
  const [sortby, setSortBy] = useState(null);
  const [sortedBooks, setSortedBooks] = useState(getItem('readed') || []);

  useEffect(() => {
      const booksFromLocalStorage = getItem('readed');
      setSortedBooks(booksFromLocalStorage || []);
  }, []);

  const booksSort = (bookProp) => {
      const sorted = [...sortedBooks];
      if (bookProp === "rating") {
          sorted.sort((a, b) => b.rating - a.rating);
      } else if (bookProp === "totalPages") {
          sorted.sort((a, b) => b.totalPages - a.totalPages);
      } else if (bookProp === "yearOfPublishing") {
          sorted.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      setSortedBooks(sorted);
  }

  const handleSortBtn = (bookProp) => {
      setSortBy(bookProp);
      booksSort(bookProp);
  }





    return (
        <div>

            <button className="btn text-3xl work-sans-700 w-full lg:h-[100px] mt-12">Books</button>

            {/* sort drop down menu */}
            <div className="text-center mt-4">

            <details className="dropdown">

                <summary className="m-1 btn text-white work-sans-600 bg-[#23BE0A]">Sort By <IoIosArrowDown></IoIosArrowDown> </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">

                    <li><button onClick={() => handleSortBtn("rating")}>Rating</button></li>

                    <li><button onClick={() => handleSortBtn("totalPages")}>Number Of Pages</button></li>

                    <li><button onClick={() => handleSortBtn("yearOfPublishing")}>Published Year</button></li>
                </ul>
            </details>
            </div>
            {/* sort dropdown end */}








            <div className="flex items-center justify-center my-10 w-full  overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-800">
        <Link
        //   to="/listedbook"
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-4 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 flex-auto px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/* nested outlet readbooks and wishlist */}
            <div>
          <Outlet></Outlet>
            </div>

        </div>
    );
};

export default ListedBooks;