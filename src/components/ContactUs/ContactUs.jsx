import { FaBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center">

            <div className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Any need you can always contact with us.Feel free ask any questions.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <input type="submit" value="Send Message" className="btn bg-[#23BE0A] text-white text-[#23BE0A] font-bold rounded-lg border-2 p-2 border-[#23BE0A]" />


                    </form>
                </div>
            </div>


            <div className="mt-10 flex-shrink-0 w-1/2 text-center bg-white dark:bg-gray-800 lg:p-8">
               
               <div>
                <FaBuilding className="mx-auto text-4xl lg:text-5xl mb-4"></FaBuilding> 
                <h3 className="mb-4 text-2xl lg:text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    
                    Company Information</h3>
                    <p className="font-light">Book Hive is a company of various types
                     books.You can  <br /> enjoy here to read books</p>
                    
                   
                </div>

               <div>
               <IoLocationOutline className="mx-auto text-5xl mt-4 mb-4"></IoLocationOutline>
               <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                   
                    Address</h3>
                <p className="font-light">SILVER LAKE, 1941 Late Avenue</p>
                <p className="font-thin"><span className="font-light">Zip Code/Postal code  :</span > 03875</p>
                <p className="font-light"> United States</p>
               </div>

               <div>
               <MdCall className=" mx-auto text-5xl mb-4 mt-4"></MdCall>
               <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Call Us</h3>

                <p className="font-light">Call us to speak to a member of our team. <br />
                 We are always happy to help.</p>
                <p className="font-medium">+1 (646) 786-5060</p>
                
               </div>
            </div>

        </div>
    );
};

export default ContactUs;