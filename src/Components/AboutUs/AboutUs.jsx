
import about from "../../../public/assets/about.jpg"
const AboutUs = () => {
    return (
        <div>
            <div className="hero bg-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={about}
                        className="max-w-sm rounded-lg " />
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-justify">
                            Gadget Haven is an e-commerce platform focused on electronics and tech accessories, offering a streamlined and user-friendly shopping experience. The website is designed to cater to tech enthusiasts, providing a vast selection of products like smartphones, laptops, wearable tech, smart home devices, audio accessories, and more.
                            The website features clear categories, sub-categories, and filters, making it easy for users to find products quickly. A prominent search bar also helps customers search directly for specific items or brands.
                            Each product page provides detailed specifications, high-quality images, and video demos. User-generated reviews and ratings are displayed to help customers make informed purchasing decisions.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;