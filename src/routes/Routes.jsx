
import {
    createBrowserRouter,
} from "react-router-dom";

import GadgetCards from "../components/Home/GadgetCards/GadgetCards";
import Home from "../components/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Statistics from "../pages/Statistics";
import GadgetDetails from "../components/GadgetDetails/GadgetDetails";
import Dashboard from "../components/Dashboard/Dashboard";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <GadgetCards />,
                        errorElement:<h2 className="text-5xl">Something is Wrong</h2>,
                        loader:()=>fetch('../gadgets.json')
                    },
                    {
                        path: '/',
                        element: <GadgetCards />,
                        loader:()=>fetch('../gadgets.json')
                    }
                ],
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/gadget-details/:gadget_id',
                element: <GadgetDetails />,
                loader:()=>fetch('../gadgets.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children:[
                    {
                        path: '/dashboard/cart',
                        element:<Cart/>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element:<Wishlist/>
                    },
                    
                    //default display
                    {
                        path: '/dashboard',
                        element:<Cart/>
                    }
                ]
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/wishlist',
                element:<Wishlist/>
            }
        ]
    },
]);
export { routes } 