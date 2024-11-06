import React, { useEffect } from 'react';

const Usetitle = (title) => {
  useEffect(()=>{
    document.title=`${title} | Gadget Haven`
  },[])
    return (
        <div>
            
        </div>
    );
};

export default Usetitle;