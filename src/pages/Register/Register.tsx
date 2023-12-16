import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "../../store/rootReducer";

const Register = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    if (isAuthenticated) return <Navigate to={"/dashboard"} />;

    return (
        <form id="sign_in">
            <h2>Register</h2>
            <div className="inputbx">
                {/* <!--Email and password input are contained here and within--> */}
                <div className="email">
                    <input
                        id="email"
                        type="email"
                        autoComplete="true"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="password">
                    <input id="password" type="password" required />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="password">
                    <input id="confirm_password" type="password" required />
                    <label htmlFor="confirm_password">Confirm password</label>
                </div>
            </div>

            <div className="btnbx">
                {/* <!--Call to action container--> */}
                <button type="submit">Register</button>

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
