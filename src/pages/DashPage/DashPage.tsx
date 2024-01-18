<<<<<<< HEAD
import "./DashPage.css";
import { NavLink, Outlet } from "react-router-dom";
=======
import { NavLink, Outlet } from "react-router-dom";
import "./DashPage.css";
>>>>>>> f682256 (hello)


const DashPage: React.FC = () => {


    return (
        <>
            <main className="dashboard">
                <nav>
                    <ul className="links">
                        <li>
                            <NavLink to={'/'} end>Home</NavLink>
                        </li>
                        <li>
<<<<<<< HEAD
                            <NavLink to={'/dashboard'} end>profile</NavLink>
=======
                            <NavLink to={'/dashboard/'} end>profile</NavLink>
>>>>>>> f682256 (hello)
                        </li>
                        <li>
                            <NavLink to={'/dashboard/template/create'} end>Add Template</NavLink>
                        </li>
<<<<<<< HEAD
                        <li>
                            <NavLink to={'/dashboard/templates/manage'} end>Manage Templates</NavLink>
                        </li>
=======
>>>>>>> f682256 (hello)

                    </ul>
                </nav>
                <Outlet />
            </main>
        </>

    );
};

export default DashPage;
