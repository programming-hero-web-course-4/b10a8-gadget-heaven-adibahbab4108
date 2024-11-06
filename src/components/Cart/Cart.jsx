import { getAllFromLocalStorage } from "../../routes/utility/utils";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const cart = getAllFromLocalStorage('cart');
        setCart(cart);
    }, [])
    return (
        <>
            <div>
                <h1 className="font-bold text-3xl">Cart</h1>
            </div>
            <div className="mt-12 flex flex-col gap-4">
                {
                    cart.map((item, index) => (
                        <div key={index} className="flex border justify-between rounded-xl ">
                            <div className="flex justify-center items-center">
                                <div className="w-48 p-4">
                                    <img src={item.product_image} alt={item.product_title} />
                                </div>
                                <div className="p-4">
                                    <h2 className="font-bold text-xl mb-2">{item.product_title}</h2>
                                    <p className="w-3/4">{item.description}</p>
                                    <p className="font-bold mt-2">Price: ${item.price}</p>
                                </div>

                            </div>
                            <button> <RiDeleteBin6Fill className="text-red-600 text-4xl mr-6 " /></button>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Cart;