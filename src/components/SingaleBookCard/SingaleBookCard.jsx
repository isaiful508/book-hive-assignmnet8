import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingaleBookCard = ({ card }) => {
  const { image, bookName, author, rating, tags, category, id } = card;

  
  return (
    <Link to={`/book-details/${id}`} className="card mt-8 lg:w-96 bg-base-100 border-2 shadow-md">

      <figure className="px-10 pt-10">

        <img src={image} alt="booksImg" className="bg-[#F3F3F3] rounded-xl" />
      </figure>
      <div className="flex justify-around items-center mt-4">
        <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">{tags[0]}</button>
        <button className="text-[#23BE0A] work-sans-500 rounded-full bg-[#23BE0A0D] p-2">{tags[1]}</button>
      </div>
      <div className="card-body">

        <h2 className="card-title work-sans-700">{bookName}</h2>
        <p className="work-sans-500">By : {author}</p>

        <div className="flex justify-between items-center">
          <p className="work-sans-500">{category}</p>
          <div className="flex items-center gap-2">
            <p className="work-sans-500"> {rating}   </p> <CiStar className="text-xl"></CiStar>
          </div>
        </div>

      </div>

    </Link>
  );
};

export default SingaleBookCard;