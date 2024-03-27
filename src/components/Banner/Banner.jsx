import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
            <div className="bg-gray-100  mt-12 rounded-xl dark:text-gray-800">

                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                    <div className="flex flex-col justify-center p-4 text-center rounded-sm  lg:max-w-md xl:max-w-lg lg:text-left">

                        <h1 className="lg:text-5xl text-3xl work-sans-700 text-black font-bold leading-none ">Books to freshen  up your bookshelf
                        </h1>



                        <div className="flex mt-5 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                            <NavLink to='/listed-books'
                                className="px-8 py-3 text-white font-semibold rounded bg-[#23BE0A] dark:text-gray-50">
                                View The List</NavLink>
                        </div>

                    </div>

                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="/banner.png" alt="" className="object-contain h-72  sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;