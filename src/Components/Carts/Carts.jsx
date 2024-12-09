import React, { useEffect, useState } from 'react';
import banner from '../../../public/assets/banner.jpg'
import { Link } from 'react-router-dom';
import { deletestorecartlist, getStoreCartList } from '../Utility/Utility';
import Cart from '../Cart/Cart';
import { Helmet } from 'react-helmet-async';
const Carts = ({ gadgets, handlepurches, sum, cartlists,handlesortbyprice ,ispurchs}) => {

const sortprice=[]
  {
    cartlists?.map(cart=>sortprice.push(cart))
  } 


   

    return (
        <div className='mx-4 lg:mx-40 mt-10'>
            
            <div className='lg:flex justify-between items-center mb-10'>
                <div>
                    <p className='text-3xl font-bold'>Cart</p>
                </div>
                <div className='flex gap-3  lg:items-center'>

                    <p className='text-3xl font-bold'>Total cost:{sum} $</p>
                    <div className='grid items-end lg:flex gap-3'>
                        <Link onClick={() => handlesortbyprice(sortprice)} className='btn bg-white border border-purple-500 text-purple-400 font-bold'>sort by price</Link>
                        <Link onClick={() => handlepurches(sum)} disabled={ispurchs} className='btn bg-purple-500  text-white font-bold'>{ispurchs?"Purchesed":"purchase"}</Link>
                    </div>


                </div>

            </div>
            {
                cartlists?.map(cartlist => <Cart key={cartlist.product_id} cartlist={cartlist} ></Cart>)


            }

        </div>
    );
};

export default Carts;