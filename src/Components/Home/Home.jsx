import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
    const categories=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Gadgets categories={categories} >
                <Outlet></Outlet>
            </Gadgets>
           
        </div>
    );
};

export default Home;