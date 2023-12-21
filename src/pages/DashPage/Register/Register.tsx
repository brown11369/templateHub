import "./Register.css";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "../../../store/rootReducer";
import useRegister from "../../../hooks/useRegister";

const Register = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    if (isAuthenticated) return <Navigate to={"/dashboard"} />;

    const {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleRegister,
    } = useRegister();

    return (
        <form id="sign_in">
            <h2>Register</h2>
            <div className="inputbx">
                {/* <!--Email and password input are contained here and within--> */}
                <div className="username">
                    <input
                        id="username"
                        type="text"
                        onChange={(e) => {
                            e.preventDefault();
                            setName(e.target.value);
                        }}
                        required
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="email">
                    <input
                        id="email"
                        type="email"
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                        autoComplete="true"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="password">
                    <input
                        id="confirm_password"
                        type="password"
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                        required
                    />
                    <label htmlFor="confirm_password">Confirm password</label>
                </div>
            </div>

            <div className="btnbx">
                {/* <!--Call to action container--> */}
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleRegister();
                    }}
                    disabled={!name || !email || !password}>
                    Register
                </button>

                <p>
                    Already have an account,
                    <Link to={"/dashboard/login"}>Sign In</Link>
                    here
                </p>
            </div>
        </form>
    );
};

export default Register;
