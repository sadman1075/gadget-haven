
import { Link } from 'react-router-dom';
import banner from "../../../public/assets/banner.jpg"

const Wishlist = ({wishlist}) => {
   
    const {product_image,product_title,price,specification}=wishlist
    return (
        <div className='mx-4 lg:mx-40 mt-10'>
            
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}

                    <tbody>

                        <tr className='flex justify-between items-center '>

                            <td>
                                <div className="flex items-center justify-center gap-8">

                                    <div className="w-28 lg:w-60">
                                        <img
                                            src={product_image}
                                            className='rounded-2xl'
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>

                                    <div>
                                        <div>
                                            <p className="font-bold lg:text-4xl">{product_title}</p>
                                        </div>
                                        <div>
                                            <p className="lg:text-2xl opacity-50">{specification}</p>
                                        </div>
                                        <div>
                                            <p className="lg:text-2xl opacity-50"><b>Price</b>: {price} $</p>
                                        </div>
                                        <div>
                                            <Link className="btn lg:text-xl text-white bg-purple-500 mt-2 rounded-full">Add to Cart</Link>
                                        </div>                                    </div>
                                </div>
                            </td>


                            <th>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-12 border border-red-500 rounded-full p-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </Link>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default Wishlist;