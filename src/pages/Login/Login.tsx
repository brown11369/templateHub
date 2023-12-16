import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../../store/authSlice";
import { RootState } from "../../store/rootReducer";

const Login = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    const navigate = useNavigate();
    if (isAuthenticated) return <Navigate to={"/dashboard"} />;

    const dispatch = useDispatch();
    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(setAuthenticated(true));
        navigate("/dashboard");
    };

    return (
        <form id="sign_in">
            <h2>Sign in</h2>
            {/* <!--Email and password input are contained here and within--> */}
            <div className="inputbx">
                <div className="email">
                    <input
                        id="email"
                        type="email"
                        autoComplete="true"
                        required
                    />
                    <label htmlFor="email">Enter email</label>
                </div>
                <div className="password">
                    <input id="password" type="password" required />
                    <label htmlFor="password">Enter password</label>
                </div>
            </div>

            {/* <!--Call to action container--> */}
            <div className="btnbx">
                <button type="submit" onClick={handleLogin}>
                    Sign in
                </button>

                <p>
                    Don't have an account,
                    <Link to={"/dashboard/register"}>Register</Link>
                    here
                </p>
            </div>
        </form>
    );
};

export default Login;
