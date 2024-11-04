import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

import CoffeeCards from "../components/CoffeeCards";
import ErrorPage from "../components/ErrorPage";
import CoffeeDetails from "../pages/CoffeeDetails";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../coffees.json')
                    },
                    {
                        path: '/',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: () => fetch('../coffees.json')
                    }
                ]
            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>,loader: () => fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/coffee/:id', 
                element: <CoffeeDetails></CoffeeDetails>,
                loader: () => fetch('../coffees.json')

            }
        ]

    },
]);

export default router