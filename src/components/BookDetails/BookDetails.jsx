import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const bookDetailsData = useLoaderData();
    console.log(bookDetailsData);
    return (
        <div>
            <h1>Here is book details</h1>
        </div>
    );
};

export default BookDetails;