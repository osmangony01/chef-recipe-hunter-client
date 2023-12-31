import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorRoute from "../components/ErrorRoute/ErrorRoute";
import PrivateRoute from "../private-routes/PrivateRoute";
import loadChefData from "../loader/LoadChefData";
import ViewRecipe from "../components/ViewRecipe/ViewRecipe";
import viewChefRecipe from "../loader/ViewChefRecipe";
import Blog from "../components/Blog/Blog";
import AboutUs from "../components/AboutUs/AboutUs";

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
                path: '/chef/:id',
                element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader: viewChefRecipe,

            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
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