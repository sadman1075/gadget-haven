import toast from "react-hot-toast";

const getStoreCartList = () => {
   const all=localStorage.getItem('cart-list');
   if(all){
    const favorites=JSON.parse(all)
    
    return favorites;
   }
   
   else{
   
    return []
   }
  
   
}


const getStoreWishList = () => {
   const all=localStorage.getItem('wish-list');
   if(all){
    const wishes=JSON.parse(all)
    
    return wishes;
   }
   
   else{
   
    return []
   }
  
   
}

const addToStoreCartList = (gadget) => {
   const favorites=getStoreCartList()
   const isExist=favorites.find(item=>item.product_id==gadget.product_id)
   if(isExist){
    toast.error("Product Already Exist in your cart")
   }
   else{
   favorites.push(gadget)
   localStorage.setItem("cart-list",JSON.stringify(favorites))
   toast.success("Successfully Added to your cart")
   }
}
const addToStoreWhishList = (gadget) => {
   const wishes=getStoreCartList()
   const isExist=wishes.find(item=>item.product_id==gadget.product_id)
   if(isExist){
    toast.error("Product Already Exist in your wishlist")
   }
   else{
   wishes.push(gadget)
   localStorage.setItem("wish-list",JSON.stringify(wishes))
   toast.success("Successfully Added to your wishlist")
   }
}


const deletestorecartlist=()=>{
   const all=localStorage.removeItem('cart-list')
   console.log(all)
   
}

export { addToStoreCartList,getStoreCartList,addToStoreWhishList,getStoreWishList,deletestorecartlist }