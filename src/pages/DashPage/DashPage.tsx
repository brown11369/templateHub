import "./DashPage.css";
import { apiUrl } from "../../utils/constant";
import useLogout from "../../hooks/useLogout";
import useUserInfo from "../../hooks/useUserInfo";

const DashPage: React.FC = () => {
    const { handleLogout } = useLogout(apiUrl);

    const { loading, userInfo } = useUserInfo();

    return (
        <div className="dashpage">
            <h1>Welcome to Dashboard page</h1>
            {loading ? <p>Loading...</p> : userInfo && <p>{userInfo.name}</p>}

            <button
                className="logout-btn"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handleLogout();
                }}>
                Logout
            </button>
        </div>
    );
};

export default DashPage;
