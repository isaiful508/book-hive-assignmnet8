import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import SingaleBookCard from "../SingaleBookCard/SingaleBookCard";


const BooksCard = () => {
    const [booksCard, setBooksCard] = useState([]);


    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooksCard(data))
    }, []);
    console.log(booksCard);

    return (
        <div className="mt-12">
            <div>
                <h1 className="text-4xl work-sans-700 text-center">Books</h1>
            </div>

          <div className="grid gap-5 grid-cols-3">

          {
                booksCard.map(card => <SingaleBookCard card={card} key={card.id}></SingaleBookCard>)
            }

          </div>


        </div>
    );
};

export default BooksCard;

