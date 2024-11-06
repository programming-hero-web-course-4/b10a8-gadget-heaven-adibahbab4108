import { FaCartArrowDown } from "react-icons/fa";
import { addToCart } from "../../routes/utility/utils";


const AddToCartBtn = ({ gadget }) => {
    const { product_title, product_image, description, specification, price, launch_year, rating, availability } = gadget;
    const handleAddToCart = (gadget) => {
        addToCart(gadget)

    }
    return (
        <>
            <button
                className={` ${availability ? 'bg-primary': 'bg-violet-400'} text-white px-4 py-2 font-bold rounded-full`}
                onClick={() => handleAddToCart(gadget)}  disabled={!availability}>
                Add to Cart <FaCartArrowDown className="inline-block text-2xl ml-2" />
            </button>
        </>
    );
};

export default AddToCartBtn;