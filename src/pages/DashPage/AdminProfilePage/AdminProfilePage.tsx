import "./AdminProfilePage.css"

import useLogout from "../../../hooks/useLogout";
import useUserInfo from "../../../hooks/useUserInfo";


const AdminProfile = () => {
    const { handleLogout } = useLogout();
    const { loading, userInfo } = useUserInfo();

    return (
        <section className="dashpage">
            <h1>Welcome to Dashboard page</h1>
            {loading ? <p>Loading...</p> : userInfo && <p>{userInfo.name}</p>}

            <button
                className="btn"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    handleLogout();
                }}>
                Logout
            </button>
        </section>
    )
}

export default AdminProfile