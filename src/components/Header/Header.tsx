import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <Link to={"/"}>Template-Hub</Link>
            <nav>
                <ul>
                    <NavLink to={"/"}>home</NavLink>
                    <NavLink to={"/"}>about us</NavLink>
                    <NavLink to={"/"}>contact</NavLink>
                    <NavLink to={"/"}>login</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
