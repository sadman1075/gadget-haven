import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Cart from "../Carts/Carts";
import Wishlist from "../Wishlist/Wishlist"
import { useEffect, useState } from "react";
import Wishlists from "../Wishlists/Wishlists";
import Carts from "../Carts/Carts";
import { IoIosCloudDone } from "react-icons/io";
import { deletestorecartlist, getStoreCartList, getStoreWishList } from "../Utility/Utility";
import toast from "react-hot-toast";



const Dashboard = () => {
    const gadgets = useLoaderData()
    const [isactive, setactive] = useState({
        cart: true,
        status: "cart",
    })
    const [cartlists, setcartlists] = useState([])

    let infoprices = [];
    const handleisactivecart = (status) => {
        if (status == "cart") {
            setactive({
                cart: true,
                status: "cart"
            })
        }
        else {
            setactive({
                cart: false,
                status: "selected"
            })
        }
    }
    useEffect(() => {
        const storecartList = getStoreCartList();
        setcartlists(storecartList)

    }, [])

    const [wishlists, setwishlists] = useState([])



    useEffect(() => {
        const storewishList = getStoreWishList();
        setwishlists(storewishList)

    }, [])


    const [ispurchs,setispurchs]=useState(false)
    const handlepurches = (sum) => {
        if (sum == 0) {
            toast.error("You Need to add some product")
        }
        else {
            document.getElementById('my_modal_1').showModal();

            const deletecart = deletestorecartlist();
            setcartlists(deletecart)
            setispurchs(true)






        }
    }



    const sortprice = []

    {
        cartlists?.map(cartlist => sortprice.push(cartlist))
    }

    const handlesortbyprice = (sortprice) => {
        const sortbyprice = sortprice.sort((a, b) => b.price - a.price)
        console.log(sortbyprice)
        setcartlists(sortbyprice)

    }



    {
        cartlists?.map(cartlist => infoprices.push(cartlist.price))
    }
    let sum = 0;
    for (let infoprice of infoprices) {
        sum = sum + infoprice
    }

   







    return (
        <div>
            <div className="bg-[#9538E2] pt-8 px-8 lg:pt-16 lg:px-16">
                <h1 className="text-4xl text-center text-white font-bold">Dashboard</h1>
                <p className="text-center text-xl text-white mt-4 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="flex justify-center gap-4 mt-8">
                    <Link onClick={() => handleisactivecart("cart")} className={` btn rounded-full px-10 mb-20 border ${isactive.cart ? "bg-white text-purple-500" : "bg-[#9538E2] border-white text-white"} `}>Cart</Link>
                    <Link onClick={() => { handleisactivecart("selected") }} className={` btn rounded-full mb-20 border ${isactive.cart ? "bg-[#9538E2] border-white text-white" : "bg-white text-purple-500"}`} >Whishlist</Link>
                </div>

            </div>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className="flex justify-center">
                            <IoIosCloudDone className="text-green-500 text-8xl" />

                        </div>
                        <h3 className="font-bold text-4xl text-center">Payment Successfully</h3>
                        <p className="mt-10 text-2xl text-center">Thanks For Purchasing</p>
                        <p className="py-4 text-2xl text-center">Successfully you did it</p>
                        <div className="modal-action">
                            <form method="dialog">

                                <button id="closeModal" className="btn bg-green-500 text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


            {
                isactive.cart ? <Carts ispurchs={ispurchs} gadgets={gadgets} handlepurches={handlepurches} handlesortbyprice={handlesortbyprice} sum={sum} cartlists={cartlists}></Carts> : <Wishlists wishlists={wishlists}></Wishlists>
            }
        </div>
    );
};

export default Dashboard;