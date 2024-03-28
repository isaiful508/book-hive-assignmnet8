import { useEffect, useState } from "react";
import { getItem } from "../utility/localstorage";
import CustomShapeBarChart from "../CustomShapeBarChart/CustomShapeBarChart2";


const PagesToWish = () => {
    const [wishList, setWishList] = useState([]);
    // console.log(reads);
    useEffect(() => {
        const wishes = getItem('wishList');
        setWishList(wishes);
    },[]);

    return (
        <div >
           
            
            <CustomShapeBarChart data={wishList}></CustomShapeBarChart>
           
        </div>
    );
};

export default PagesToWish;