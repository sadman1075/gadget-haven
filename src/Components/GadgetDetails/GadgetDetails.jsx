import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToStoreCartList, addToStoreWhishList, getStoreCartList } from "../Utility/Utility";
import { useState } from "react";


const GadgetDetails = () => {
    const { gadgetId } = useParams()
    const gadgets = useLoaderData()


    const gadget = gadgets?.find(gadget => gadget.product_id == gadgetId)

    const { product_image,product_id, product_title, price, ratings, availability, description, specification } = gadget || {}
const [isadded,setisadded]=useState(false)
const [iswish,setiswish]=useState(false)
    const handleaddtocart=(gadget)=>{
        addToStoreCartList(gadget)
        setisadded(true)
      
    }
    const handleaddtowish=(gadget)=>{
        addToStoreWhishList(gadget)
        setiswish(true)
      
    }
    return (
        <div>
            <div className="bg-[#9538E2] p-8 lg:p-16 ">
                <h1 className="text-4xl text-center text-white font-bold">Product Details</h1>
                <p className="text-center text-xl text-white mt-4 mb-40">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className="w-2/3 border p-4 mx-auto md:flex gap-10 items-center -mt-40 bg-white shadow-xl rounded-2xl">
                <div className="w-full lg:w-1/2">
                    <img src={product_image} className="rounded-2xl" alt="" />
                </div>
                <div className="w-full lg:w-1/2 ">
                    <h1 className="mt-3 text-3xl font-bold">{product_title}</h1>
                    <p className="mt-2 text-lg font-semibold ">price: {price} $</p>
                    {
                        availability == true ? <p className="border w-28 p-1 text-center rounded-2xl text-green-700 border-green-700 bg-green-200 mt-3">In Stock</p> : <p className="border w-28 p-1 text-center rounded-2xl text-red-700 border-red-700 bg-red-200 mt-3">Out of Stock</p>
                    }
                    <p className="mt-2"><b>Description</b> <br />{description}</p>
                    <p className="mt-2"><b>Specification</b> <br />{specification}</p>
                    <p className="mt-2 font-bold">Rating</p>
                    <div className="mt-2 flex gap-3 items-center ">
                        <p className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={3.5} stroke="yellow" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={3.5} stroke="yellow" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={3.5} stroke="yellow" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={3.5} stroke="yellow" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={3.5} stroke="yellow" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </p>
                        <p className="text-lg">{ratings}</p>
                    </div>
                    <div  className="text-center lg:flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Link onClick={()=>handleaddtocart(gadget)} disabled={isadded} className="btn mt-3 rounded-full bg-[#9538E2] text-white" >{isadded ? "Added to Cart" : "Add to Cart"}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            </Link>
                            <Link onClick={()=>handleaddtowish(gadget)} disabled={iswish} className="btn mt-3 rounded-full bg-white border border-purple-600">{iswish?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple" className="size-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple" className="size-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>}
                                

                            </Link>
                        </div>
                        
                        <div className="">
                            <Link className="btn bg-[#9538E2] text-white rounded-full mt-3" to={"/"}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;