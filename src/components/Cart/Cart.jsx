import { deleteFromList, getAllFromLocalStorage } from "../../routes/utility/utils";
import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaSortAmountUp } from "react-icons/fa";

const Cart = () => {
    const [carts, setCart] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const carts = getAllFromLocalStorage('cart');
        setCart(carts);
    
        const totalAmount = carts.reduce((acc, cart) => acc + parseInt(cart.price, 10), 0);
        setTotal(totalAmount);
    }, []);

    const handleDeleteBtn = (id, type) => {
        deleteFromList(id, type)
        const carts = getAllFromLocalStorage(type);
        setCart(carts);

        const totalAmount = carts.reduce((acc, cart) => acc + parseInt(cart.price, 10), 0);
        setTotal(totalAmount);
    }

    const handleSortBtn = () => {
        const sortedCart = [...carts].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };
    

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">Cart</h1>
                <div className="flex gap-3 items-center">
                    <h1 className="font-bold text-2xl">Total: ${total}</h1>
                    <button className="flex gap-2 outline outline-purple-600 rounded-full px-3  items-center btn">
                        <h3 className="font-bold text-lg" onClick={handleSortBtn}>Sort by Price</h3>
                        <FaSortAmountUp />
                    </button>
                    <button className="text-white text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400  rounded-full px-5 btn">Purchase</button>
                </div>
            </div>
            <div className="mt-12 flex flex-col gap-4">
                {
                    carts.map((item, index) => (
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
                            <button onClick={() => handleDeleteBtn(item.product_id, 'cart')}> <RiDeleteBin6Fill className="text-red-600 text-4xl mr-6 " /></button>
                        </div>

                    ))
                }
                {
                    carts.length == 0 ? <h2 className="text-3xl text-warning font-bold text-center"> Cart is empty</h2> : ''
                }
            </div>
        </>
    );
};

export default Cart;