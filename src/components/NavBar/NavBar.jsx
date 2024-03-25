import { NavLink } from "react-router-dom";




const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/listed-books">Listed Books</NavLink>
                    <NavLink to="/pages-to-read">Pages to Read</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl work-sans-700 font-bold">Book Hive</a>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="menu flex items-center work-sans-400 menu-horizontal space-x-6 px-1">

                    <NavLink to='/' 
                    className={({isActive})=> isActive? 'text-[#23BE0A] font-bold rounded-lg border-2 p-2 border-[#23BE0A]' : 'font-medium'}>Home</NavLink>

                    <NavLink to='/listed-books' 
                    className={({isActive})=> isActive? 'text-[#23BE0A] font-bold rounded-lg border-2 p-2 border-[#23BE0A]' : 'font-medium'}>Listed Books</NavLink>

                    <NavLink to='/pages-to-read'
                     className={({isActive})=> isActive? 'text-[#23BE0A] font-bold rounded-lg border-2 p-2 border-[#23BE0A]' : 'font-medium'}>Pages to Read</NavLink>
                </ul>

            </div>

            <div className="navbar-end space-x-4">

                <a className="btn bg-[#23BE0A] text-white">Sign In </a>
                <a className="btn text-white bg-[#59C6D2]">Sign Up</a>

            </div>
        </div>
    );
};

export default NavBar;