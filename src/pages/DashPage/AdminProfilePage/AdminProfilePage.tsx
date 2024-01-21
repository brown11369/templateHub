import "./AdminProfilePage.css"

import useLogout from "../../../hooks/useLogout";
import useUserInfo from "../../../hooks/useUserInfo";


const AdminProfile = () => {
    const { handleLogout } = useLogout();
    const { loading, userInfo } = useUserInfo();
    return (
        <section className="dashpage">
            <div>
                <h2 className="heading">Profile</h2>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Admin Color Scheme</span>
                    </div>
                    <div className="dash-last clr-schm-contain">
                        <div>
                            <span>Default</span>
                            <div className="clr-container">
                                <div>
                                    <div className="clr-box bx1"></div>
                                    <div className="clr-box bx2"></div>
                                </div>
                                <div>
                                    <div className="clr-box bx3"></div>
                                    <div className="clr-box bx4"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Light</span>
                            <div className="clr-container">
                                <div>
                                    <div className="clr-box bx1"></div>
                                    <div className="clr-box bx2"></div>
                                </div>
                                <div>
                                    <div className="clr-box bx3"></div>
                                    <div className="clr-box bx4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>User Email</span>
                    </div>
                    <div className="dash-last">
                        {loading ? "Loading" : <input type="text" value={userInfo?.email} />}
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>User Name</span>
                    </div>
                    <div className="dash-last">
                        {loading ? "Loading" : <input type="text" value={userInfo?.name} />}
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Nickname (required)</span>
                    </div>
                    <div className="dash-last">
                        <span>Dr. Fury</span>
                    </div>
                </div>

                <div className="dash-container">
                    <div className="dash-first">
                        <span>Display name publicly as</span>
                    </div>
                    <div className="dash-last">
                        <select>
                            <option value="GoGo">GOGo</option>
                            <option value={userInfo?.name}>{userInfo?.name}</option>
                        </select>
                    </div>
                </div>


                <div className="dash-container">
                    <div className="dash-first">
                        <span>Profile Picture</span>
                    </div>
                    <div className="dash-last">
                        <span>Image</span>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>New Password</span>
                    </div>
                    <div className="dash-last">
                        <button>Set New Password</button>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Sessions</span>
                    </div>
                    <div className="dash-last">
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            handleLogout();
                        }}>Log Out Everywhere Else</button>
                    </div>
                </div>
                <div className="dash-container">
                    <div>
                        <button>Update Profile</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminProfile;