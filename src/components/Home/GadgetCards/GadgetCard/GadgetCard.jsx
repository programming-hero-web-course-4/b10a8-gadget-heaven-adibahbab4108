import { Link } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
    const {product_id, product_title, product_image, price } = gadget
    
    return (
        <>
            <div className='p-4 rounded-xl border  '>
                <img className='rounded-lg w-full  h-80 object-cover mb-8 ' src={product_image} alt="" />
                <div className="">
                    <h2 className='text-xl font-bold mb-3'>{product_title}</h2>
                    <p className='text-xl mb-3'>Price: ${price}</p>
                    <Link to={`/gadget-details/${product_id}`}>
                        <button className='btn btn-sm rounded-full outline outline-offset-2 outline-primary text-primary text-lg  bg-transparent'>View Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default GadgetCard;