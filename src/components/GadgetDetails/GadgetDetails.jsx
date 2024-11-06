import { useLoaderData, useParams } from "react-router-dom";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { addToCart, addToWishlist } from "../../routes/utility/utils";
import AddToCartBtn from "../Buttons/AddToCartBtn";

const GadgetDetails = () => {
    const { gadget_id } = useParams();
    const gadgets = useLoaderData();

    const [gadget] = gadgets.products.filter(gadget => gadget.product_id === gadget_id);
    const { product_id, product_title, product_image, description, specification, price, launch_year, rating, availability } = gadget;

    const handleAddToWishlist = (cart) => {
        addToWishlist(cart)
    }
    return (
        <>
            <div className=" text-white bg-primary pt-8 pb-48 md:mb-80">
                <div className="text-center ">
                    <h2 className="font-bold text-4xl mb-4">Product Details</h2>
                    <p className="w-3/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart device to coolest accessories, We have it all</p>

                </div>
                <div className="relative mt-6 grid place-items-center ">
                    <div className="top-0 grid lg:grid-cols-5 p-6 gap-10 w-5/6 rounded-2xl bg-white text-black  absolute z-10">
                        <div className="col-span-5 lg:col-span-2 grid place-items-center ">
                            <img className="rounded-xl  mx-auto" src={product_image} alt="" />
                        </div>
                        <div className="col-span-3 ">
                            <h2 className="font-bold text-2xl mb-2">{product_title}</h2>
                            <p>Price: <strong>${price}</strong></p>
                            {availability ? <p className="inline-block px-3 font-bold text-green-800 rounded-full outline outline-green-800 bg-green-200 my-4">In Stock</p> : <p className="inline-block px-3 text-red-800 font-bold rounded-full outline outline-red-800 bg-red-200 my-4">Out of Stock</p>}
                            <p className="mb-3">{description}</p>
                            <strong>Specification:</strong>
                            <ol className=" list-decimal ml-10 my-3">
                                {Object.entries(specification).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ol>
                            <div>
                                <strong>Rating: {rating}</strong>

                            </div>
                            <div className="flex gap-6  my-6">
                                <AddToCartBtn gadget={gadget}/>
                                <button><FaRegHeart className="text-4xl" onClick={() => handleAddToWishlist(gadget)} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GadgetDetails;