import { useEffect, useState } from "react";
import { getItem } from "../utility/localstorage";

import CustomShapeBarChart from "../CustomShapeBarChart/CustomShapeBarChart";


const PagesToRead = () => {

    const [reads, setReads] = useState([]);
    // console.log(reads);
    useEffect(() => {
        const readLists = getItem('readed');
        setReads(readLists);
    },[])

    return (
        <div>
            <h1>This is pages to read</h1>
            <CustomShapeBarChart data={reads}></CustomShapeBarChart>
           
        </div>
    );
};

export default PagesToRead;