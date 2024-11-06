import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

   
    return (
        <>
            <div className="text-center text-white bg-primary py-8 ">
                <h2 className="font-bold text-4xl mb-4">Dashboard</h2>
                <p className="w-3/4 mx-auto mb-4">Explore the latest gadgets that will take your experience to the next level. From smart device to coolest accessories, We have it all</p>
                <div className="flex justify-center gap-6 ">
                    <Link to="/dashboard/cart"><button className="btn rounded-full px-8 font-bold">Cart</button></Link>
                    <Link to="/dashboard/wishlist"><button className="btn rounded-full px-5 font-bold">Wishlist</button></Link>
                </div>
            </div>
            <Outlet/>
           
        </>
    );
};

export default Dashboard;