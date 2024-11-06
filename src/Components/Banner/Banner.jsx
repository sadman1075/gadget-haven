import { Link, useLocation } from "react-router-dom";
import banner from "../../../public/assets/banner.jpg"

const Banner = () => {
    const url = useLocation().pathname;
    console.log(url)
    return (
        <div>
            <div className={`bg-[#9538E2] m-0 lg:mb-10 lg:mx-10  px-2 lg:px-52 py-4 lg:py-12 ${url == "/" ? "rounded-b-2xl" : "rounded-2xl"}`}>
                <h1 className='text-center text-white font-bold text-4xl lg:text-6xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-center text-white mt-6 text-lg px-3 lg:px-40'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='text-center'><Link to={"/dashboard"} className='btn text-[#9538E2] mb-32 lg:mb-64 mt-8 text-lg rounded-full'>Shop Now</Link></div>



            </div>
            <div className="-mt-28 m-4 lg:-mt-72 ">
                <img src={banner} className="w-4/5 lg:w-[1062px] lg:h-[563px] mx-auto rounded-2xl lg:0 outline outline-offset-[14px] outline-2 outline-white" alt="" />
            </div>
        </div>
    );
};

export default Banner;