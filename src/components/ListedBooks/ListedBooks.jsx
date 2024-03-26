import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div>
            <button className="btn text-3xl work-sans-700 w-full h-[100px] mt-12">Books</button>


            <div className="text-center mt-4">

            <details className="dropdown">

                <summary className="m-1 btn text-white work-sans-600 bg-[#23BE0A]">Sort By <IoIosArrowDown></IoIosArrowDown> </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">

                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 2</a></li>
                </ul>

            </details>

            </div>

        </div>
    );
};

export default ListedBooks;