import "./DeveloperLoginPage.css";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { apiUrl } from "../../../utils/constant";

const DeveloperLoginPage = () => {
    const { email, password, setEmail, setPassword, handleLogin } =
        useLogin(apiUrl);

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    if (isAuthenticated) return <Navigate to={"/dashboard"} />;

    return (
        <main className="auth">

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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Enter email</label>
                    </div>
                    <div className="password">
                        <input
                            id="password"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Enter password</label>
                    </div>
                </div>

                {/* <!--Call to action container--> */}
                <div className="btnbx">
                    <button
                        type="submit"
                        disabled={!email || !password}
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}>
                        Sign in
                    </button>

                    <p>
                        Don't have an account,
                        <Link to={"/dashboard/register"}>Register</Link>
                        here
                    </p>
                </div>
            </form>
        </main>

    );
};

export default DeveloperLoginPage;
