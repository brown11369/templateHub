import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/authSlice";

const DashPage = () => {
    const dispatch = useDispatch();

    const handleLogout = (e: any) => {
        e.preventDefault();
        dispatch(setAuthenticated(false));
    };
    return (
        <>
            <h1> Welcome to Dashboard page</h1>
            <center>
                <button onClick={handleLogout}>logout</button>
            </center>
        </>
    );
};

export default DashPage;
