import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ClientUI from "./pages/ClientUI/ClientUI";
import HomePage from "./pages/ClientUI/HomePage/HomePage";
import DashLayout from "./components/DashLayout/DashLayout";
import Dashpage from "./pages/DashPage/DashPage";
import ProtectPrivate from "./components/ProtectPrivate/ProtectPrivate";
import Login from "./pages/DashPage/Login/Login";
import Register from "./pages/DashPage/Register/Register";
import CreateTemplate from "./pages/DashPage/CreateTemplate/CreateTemplate";
import TemplatePage from "./pages/ClientUI/TemplatePage/TemplatePage";
import AdminProfile from "./pages/DashPage/AdminProfile/AdminProfile";
import './App.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <ClientUI />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "template/:slug",
                        element: <TemplatePage />,
                    },
                ],
            },
            {
                path: "dashboard",
                element: (
                    <ProtectPrivate>
                        <DashLayout />
                    </ProtectPrivate>
                ),
                children: [
                    {
                        element: <Dashpage />,
                        children: [
                            {
                                index: true,
                                element: <AdminProfile />
                            },
                            {
                                path: "template/create",
                                element: <CreateTemplate />,
                            },
                        ]
                    },

                ],
            },
            {
                path: "dashboard/login",
                element: <Login />,
            },
            {
                path: "dashboard/register",
                element: <Register />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
