import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ClientUI from "./pages/ClientUI/ClientUI";
import HomePage from "./pages/ClientUI/HomePage/HomePage";
<<<<<<< HEAD
import DashLayout from "./components/dashboard/DashLayout/DashLayout";
import Dashpage from "./pages/DashPage/DashPage";
import ProtectPrivate from "./components/ProtectPrivate/ProtectPrivate";
import DeveloperLoginPage from "./pages/DashPage/DeveloperLoginPage/DeveloperLoginPage";
import DeveloperRegisterPage from "./pages/DashPage/DeveloperRegisterPage/DeveloperRegisterPage";
import CreateTemplatePage from "./pages/DashPage/CreateTemplatePage/CreateTemplatePage";
import TemplatePage from "./pages/ClientUI/TemplatePage/TemplatePage";
import AdminProfilePage from "./pages/DashPage/AdminProfilePage/AdminProfilePage";
import LoginPage from "./pages/ClientUI/LoginPage/LoginPage";
import ContactPage from "./pages/ClientUI/ContactPage/ContactPage";
import AboutPage from "./pages/ClientUI/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ManageTemplatesPage from "./pages/DashPage/ManageTemplatesPage/ManageTemplatesPage";
import TemplateViewPage from "./pages/DashPage/TemplateViewPage/TemplateViewPage";
import TemplateEditPage from "./pages/DashPage/TemplateEditPage/TemplateEditPage";
import TemplateListsPage from "./pages/DashPage/TemplateListsPage/TemplateListsPage";
=======
import DashLayout from "./components/DashLayout/DashLayout";
import Dashpage from "./pages/DashPage/DashPage";
import ProtectPrivate from "./components/ProtectPrivate/ProtectPrivate";
import Login from "./pages/DashPage/Login/Login";
import Register from "./pages/DashPage/Register/Register";
import CreateTemplate from "./pages/DashPage/CreateTemplate/CreateTemplate";
import TemplatePage from "./pages/ClientUI/TemplatePage/TemplatePage";
import AdminProfile from "./pages/DashPage/AdminProfile/AdminProfile";
>>>>>>> f682256 (hello)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
<<<<<<< HEAD
        errorElement: < ErrorPage />,
=======
>>>>>>> f682256 (hello)
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
<<<<<<< HEAD
                    {
                        path: "about",
                        element: <AboutPage />,
                    },
                    {
                        path: "contact",
                        element: <ContactPage />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
=======
>>>>>>> f682256 (hello)
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
<<<<<<< HEAD
                                element: <AdminProfilePage />
                            },
                            {
                                path: "template/create",
                                element: <CreateTemplatePage />,
                            },
                            {
                                path: "templates/manage",
                                element: <ManageTemplatesPage />,
                                children: [
                                    {
                                        index: true,
                                        element: <TemplateListsPage />
                                    },
                                    {
                                        path: '/dashboard/templates/manage/:slug/view',
                                        element: <TemplateViewPage />
                                    },
                                    {
                                        path: '/dashboard/templates/manage/:slug/edit',
                                        element: <TemplateEditPage />
                                    },
                                ]
=======
                                element: <AdminProfile />
                            },
                            {
                                path: "template/create",
                                element: <CreateTemplate />,
>>>>>>> f682256 (hello)
                            },
                        ]
                    },

                ],
            },
            {
                path: "dashboard/login",
<<<<<<< HEAD
                element: <DeveloperLoginPage />,
            },
            {
                path: "dashboard/register",
                element: <DeveloperRegisterPage />,
=======
                element: <Login />,
            },
            {
                path: "dashboard/register",
                element: <Register />,
>>>>>>> f682256 (hello)
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
