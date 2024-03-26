import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const bookDetailsData = useLoaderData();

    const { id, bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = useParams();

    const idInt = parseInt(id);
    const bookDetails = bookDetailsData.find((item) => item.id === idInt);

    
    return (

        <div className=" dark:text-gray-800">

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                <div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={bookDetails.image} alt="" className="object-contain rounded-lg bg-[#1313130D] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>

                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl work-sans-700 font-bold leading-none sm:text-4xl">{bookDetails.bookName}
                    </h1>

                    <p className="mt-4 mb-4 text-lg sm:mb-12">
                        By: {bookDetails.author}
                    </p>
                    <hr />
                    <p className="mt-4 mb-4 text-lg">{bookDetails.category}</p>
                    <hr />
                    <p className="mt-4"><span className="font-bold">Review:</span> {bookDetails.review} </p>

                    <p className="mt-4 flex items-center gap-10"><span className="font-bold">Tags:     </span> 
                        <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">#{bookDetails.tags[0]}</button>
                        <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">#{bookDetails.tags[1]}</button>
                    </p>
                    <hr />

                    <p className="mt-4">Number of Pages: <span className="work-sans-600">{bookDetails.totalPages}</span></p>
                    <p className="mt-2">Publihser: <span className="work-sans-600">{bookDetails.publisher}</span></p>
                    <p className="mt-2"> Year of Publishing: <span className="work-sans-600">{bookDetails.yearOfPublishing}</span></p>
                    <p className="mt-2">Rating: <span className="work-sans-600">{bookDetails.rating}</span></p>


                    <div className="flex flex-col mt-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">


                    <button className="btn btn-outline">Read</button>

                    <button className="btn text-white btn-success bg-[#50B1C9]">Wishlist</button>

                        

                    </div>
                </div>
            </div>
        </div>



    );
};






//propstypes validation

BookDetails.propTypes = {
    bookDetails: PropTypes.shape({
        id: PropTypes.number.isRequired,
        bookName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalPages: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
    }),
};

export default BookDetails;