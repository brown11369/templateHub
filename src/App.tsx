import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ClientUI from "./pages/ClientUI/ClientUI";
import HomePage from "./pages/ClientUI/HomePage/HomePage";
import DashLayout from "./components/dashboard/DashLayout/DashLayout";
import Dashpage from "./pages/DashPage/DashPage";
import ProtectPrivate from "./components/ProtectPrivate/ProtectPrivate";
import DeveloperLoginPage from "./pages/DashPage/DeveloperLoginPage/DeveloperLoginPage";
import DeveloperRegisterPage from "./pages/DashPage/DeveloperRegisterPage/DeveloperRegisterPage";
import DashboardPage from "./pages/DashPage/DashboardPage/DashboardPage";
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
import MediaPage from "./pages/DashPage/MediaPage/MediaPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: < ErrorPage />,
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
                                index:true,
                                element: <DashboardPage/>
                            },
                            {
                                path: "users/profile",
                                element: <AdminProfilePage />
                            },
                            {
                                path: "template/create",
                                element: <CreateTemplatePage />,
                            },
                            {
                                path:"media",
                                element:<MediaPage/>
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
                            },
                        ]
                    },

                ],
            },
            {
                path: "dashboard/login",
                element: <DeveloperLoginPage />,
            },
            {
                path: "dashboard/register",
                element: <DeveloperRegisterPage />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
