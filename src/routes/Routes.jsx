import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorRoute from "../components/ErrorRoute/ErrorRoute";
import Contact from "../components/Contact/Contact";
import PrivateRoute from "../private-routes/PrivateRoute";
import loadChefData from "../loader/LoadChefData";
import ViewRecipe from "../components/ViewRecipe/ViewRecipe";
import viewChefRecipe from "../loader/ViewChefRecipe";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: loadChefData,
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: '/chef/:id',
                element: <ViewRecipe></ViewRecipe>,
                loader: viewChefRecipe,

            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
    
])

export default route;