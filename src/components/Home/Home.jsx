import Banner from "../Banner/Banner";
import BooksCard from "../BooksCard/BooksCard";



const Home = () => {
    return (
        <div className='container mx-auto mt-4'>
           <Banner></Banner>
           <BooksCard></BooksCard>
            
        </div>
    );
};

export default Home;