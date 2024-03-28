import { useEffect, useState } from "react";
import { getItem } from "../utility/localstorage";

import CustomShapeBarChart from "../CustomShapeBarChart/CustomShapeBarChart";


const PagesToRead = () => {

    const [reads, setReads] = useState([]);
    // console.log(reads);
    useEffect(() => {
        const readLists = getItem('haveRead');
        setReads(readLists);
    },[]);

    return (
        <div >
           
            <CustomShapeBarChart data={reads}></CustomShapeBarChart>
           
        </div>
    );
};

export default PagesToRead;