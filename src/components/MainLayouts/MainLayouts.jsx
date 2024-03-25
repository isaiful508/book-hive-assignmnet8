import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const MainLayouts = () => {
    return (
        <div  className='container mx-auto mt-4'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;