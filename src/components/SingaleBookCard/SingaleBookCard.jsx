

const SingaleBookCard = ({ card }) => {
    const {image, } = card;
    return (
        <div className="card mt-8 w-96 bg-base-100 border-2 shadow-xl">
        <figure className="px-10 pt-10">

          <img  src={image} alt="Shoes" className="bg-[#F3F3F3] rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        
      </div>
    );
};

export default SingaleBookCard;