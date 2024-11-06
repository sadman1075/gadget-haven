import { useEffect, useState } from 'react';
import { getStoreWishList } from '../Utility/Utility';
import Wishlist from '../Wishlist/Wishlist';

const Wishlists = ({wishlists}) => {
  
    return (
        <div>
            <div className='mb-10 mx-4 lg:mx-40 mt-10'>
                <p className='text-3xl font-bold'>Whish List</p>
            </div>
            {
                wishlists?.map(wishlist => <Wishlist key={wishlist.product_id} wishlist={wishlist}></Wishlist>)
            }
        </div>
    );
};

export default Wishlists;