
const Footer = () => {
    return (
        <div className="bg-white">
            <h1 className="mt-24  text-4xl font-bold text-black text-center">Gadget Heaven</h1>
            <p className="text-center text-lg  text-black mt-3">Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider mx-12 lg:mx-40"></div>
            <div className="lg:flex justify-center lg:gap-40 mt-5 mb-16">
                <div>
                    <p className="text-xl text-center font-bold">Services</p>
                    <p className="text-lg text-center ">Product Support</p>
                    <p className="text-lg text-center ">Order Tracking</p>
                    <p className="text-lg text-center ">Shipping & Delivery</p>
                    <p className="text-lg text-center ">Returns</p>
                </div>
                <div className="mt-5 lg:0">
                    <p className="text-xl text-center font-bold">Company</p>
                    <p className="text-lg text-center ">About Us</p>
                    <p className="text-lg text-center ">Careers</p>
                    <p className="text-lg text-center ">Contact</p>
                </div>
                <div className="mt-5 lg:0">
                    <p className="text-xl text-center font-bold">Legal</p>
                    <p className="text-lg text-center ">Terms of Service</p>
                    <p className="text-lg text-center ">Privacy Policy</p>
                    <p className="text-lg text-center ">Cookie Policy</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;