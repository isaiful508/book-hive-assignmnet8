import { useContext } from "react";

import { getItem } from "../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { TbBrandPagekit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Context/Context";


const ReadBooks = () => {

    const { sortBy } = useContext(MyContext);
    const books = getItem("haveRead");

    const sortedBooks = [...books].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return -1;
        }
        if (a[sortBy] < b[sortBy]) {
            return 1;
        }
        return 0;
    });
    



    return (
        <div>
            {
                sortedBooks.map((book) =>
                    < div key={book.id}

                        className="card lg:card-side bg-base-100 shadow-lg">
                       
                            <img className="bg-[#1313130D] rounded-lg w-[220px] h-[300px]" src={book.image} alt="bookName" />
                        

                        <div className="card-body">
                            <h2 className="card-title">{book.bookName}</h2>
                            <p>By: {book.author}</p>

                            <div className="mt-2 flex flex-col lg:flex-row items-center gap-5"><span className="font-bold">Tags:     </span>
                                <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">#{book.tags[0]}</button>
                                <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">#{book.tags[1]}</button>
                                <p className="flex items-center gap-2"> <CiLocationOn></CiLocationOn> Year Of Publishing : {book.yearOfPublishing}</p>
                            </div>

                            <div className="flex justify-center items-center">
                                <p className="flex gap-2 items-center"> <IoMdContacts></IoMdContacts> Publisher: {book.publisher}</p>
                                <p className="flex gap-2 items-center"><TbBrandPagekit></TbBrandPagekit> Pages: {book.totalPages}</p>
                            </div>

                            <hr />

                            <div className="card-actions ">

                                <button 
                                className="btn rounded-full bg-[#328EFF26] text-[#328EFF]">Category : {book.category}</button>

                                <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-full">Rating: {book.rating}</button>

                                <NavLink to={`/book-details/${book.id}`} className="btn text-white bg-[#23BE0A] rounded-full">View Details</NavLink>

                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ReadBooks;