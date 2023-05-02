import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default route;