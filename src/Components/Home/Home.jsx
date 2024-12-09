import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories=useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Haven</title>
            </Helmet>
            <Banner></Banner>
            <Gadgets categories={categories} >
                <Outlet></Outlet>
            </Gadgets>
           
        </div>
    );
};

export default Home;