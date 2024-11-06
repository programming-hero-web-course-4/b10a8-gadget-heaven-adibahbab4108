import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard/GadgetCard";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const { category } = useParams();
    const { products } = useLoaderData();
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        if (category) {
            const gadgetsByCategory = [...products].filter(product => product.category == category)
            setGadgets(gadgetsByCategory)
        } else {
            setGadgets(products)
        }
    }, [products, category])

    return (
        <>
            <div className={`w-full ${gadgets.length > 0 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3':''}  gap-4 bg-gray-100`}>
                {
                    gadgets.length  ? gadgets.map(gadget => <GadgetCard key={gadget.product_id} gadget={gadget} />) : <h2 className="text-4xl text-balance p-6  text-purple-400 font-bold">No {category} availabile right now. Please visit leter.<br/> Thank You.</h2>
                }
            </div>
        </>
    );
};

export default GadgetCards;