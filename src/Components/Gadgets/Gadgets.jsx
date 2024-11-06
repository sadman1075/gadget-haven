/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import toast from "react-hot-toast";
import "./Gadgets.css"




const Gadgets = ({ categories }) => {

    const [gadgets, setGedgets] = useState([])
    const [infos, setinfos] = useState([])




    useEffect(() => {
        fetch("Gadgets.json")
            .then(res => res.json())
            .then(data => setGedgets(data))
    }, [])

    const { category } = useParams();
    const message="not available"
    const [error,seterror]=useState("")
    useEffect(() => {
        if (category) {
            const filteredbycategory = [...gadgets].filter(gadget => gadget.category == category)
            if (filteredbycategory.length == 0) {
                toast.error("Products Not Available at this moment")
                
            }
            
            setinfos(filteredbycategory)
            
            
            

        }
        else {
            
            setinfos(gadgets)

            
        }
        
    }, [gadgets, category])





    return (
        <div className="pt-24 pb-24 bg-base-200 rounded-3xl mx-4 lg:mx-40 p-3">
            <h1 className="text-4xl text-black font-bold text-center">Explore Cutting-Edge Gadgets</h1>

            <div className="mt-6 lg:flex gap-5">
                <div className="bg-white  lg:w-1/4 h-96 p-4 rounded-2xl border shadow-xl mb-5 lg:mb-0">
                    <div className="">

                        <div role="tablist" className=" nav grid  ">
                            <NavLink role="tab" className=" btn  hover:bg-blue-500 hover:text-white rounded-full text-lg text-gray-500 mt-3" to={"/"}>All Products</NavLink>

                            {
                                categories.map(category => <NavLink key={category.category} role="tab" className=" btn nav hover:bg-blue-500 hover:text-white rounded-full text-lg text-gray-500 mt-3" to={`/category/${category.category}`}>{category.category}</NavLink>)
                            }



                        </div>
                    </div>

                </div>

                <div>
                    <p className="text-3xl font-bold"></p>
                </div>
                <div className="lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                    {
                        infos.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)

                    }
                </div>

            </div>



        </div>
    );
};

export default Gadgets;