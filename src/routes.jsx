import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const siteRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
    }
])

export default siteRoutes