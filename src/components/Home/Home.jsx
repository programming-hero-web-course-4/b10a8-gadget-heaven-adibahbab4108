import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import GadgetCards from "./GadgetCards/GadgetCards";
import Sidebar from "./Sidebar/Sidebar";


const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Banner />
            <div className="flex md:flex-row flex-col gap-4">
                <Sidebar categories={categories} />
                <Outlet />
            </div>
        </div>
    );
};

export default Home;