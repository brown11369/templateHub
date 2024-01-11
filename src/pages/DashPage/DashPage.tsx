import { NavLink, Outlet } from "react-router-dom";
import "./DashPage.css";


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
                            <NavLink to={'/dashboard/'} end>profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/template/create'} end>Add Template</NavLink>
                        </li>

                    </ul>
                </nav>
                <Outlet />
            </main>
        </>

    );
};

export default DashPage;
