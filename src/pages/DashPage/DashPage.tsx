import "./DashPage.css";
import { NavLink, Outlet,Link } from "react-router-dom";

import useLogout from "../../hooks/useLogout";
import useUserInfo from "../../hooks/useUserInfo";


const DashPage: React.FC = () => {

    const { handleLogout } = useLogout();
    const { loading, userInfo } = useUserInfo();


    return (
        <>
            <main className="dashboard">
                <nav className="clr-schm2">
                    <ul className="links">
                        <li className="clr-schm2">
                            {loading ? <p>Loading...</p> : userInfo && <p>{userInfo.name}</p>}
                        </li>
                        <li className="clr-schm2">
                            <NavLink to={''} end>Dashboard</NavLink>
                        </li>
                        <li className="clr-schm2">
                            <NavLink to={'/dashboard/templates/manage'}>Templates
                            <ul>
                                <li>
                                    <Link to={'/dashboard/templates/manage'}>All Templates</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/template/create'} >Add Template</Link>
                                </li>
                            </ul>

                            </NavLink>
                        </li>
                        <li className="clr-schm2">
                            <NavLink to={'/dashboard/media'} end>Media</NavLink>
                        </li>
                        <li className="clr-schm2">
                            <NavLink to={'/dashboard/users/profile'} end>Users</NavLink>
                        </li>
                        <li className="clr-schm2">
                            <span
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    handleLogout();
                                }}>
                                Logout
                            </span>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </main>
        </>

    );
};

export default DashPage;
