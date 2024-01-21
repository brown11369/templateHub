import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import DialogBox from "../DialogBox/DialogBox";

const Header = () => {


    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    return (
        <header>
            <Link to={"/"}>Template-Hub</Link>
            <nav>
                <ul>
                    <NavLink to={"/"}>home</NavLink>
                    <NavLink to={"/about"}>about us</NavLink>
                    <NavLink to={"/contact"}>contact</NavLink>
                </ul>
                <button
                    className="header_btn"
                    onClick={() => { setIsDialogOpen(!isDialogOpen) }}
                >login</button>
                {isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen} />}
            </nav>
        </header>
    );
};

export default Header;
