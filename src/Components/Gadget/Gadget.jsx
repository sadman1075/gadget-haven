import { Link } from "react-router-dom";


const Gadget = ({ gadget }) => {
    const {product_image,product_title,price,product_id}=gadget
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-48" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="text-xl text-gray-500">Price: {price} $</p>
                    <div className="card-actions">
                        <Link to={`/gadget-details/${product_id}`} className="btn btn-outline  btn-secondary  rounded-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;