import { useDispatch } from "react-redux";
import { resetToast, setToast } from "../store/toastSlice";

interface ToastParams {
    isVisible: boolean;
    message: string;
}

const useToast = () => {
    const dispatch = useDispatch();

    const handleToast = (val: boolean, msg: string): void => {
        const toastParams: ToastParams = {
            isVisible: val,
            message: msg,
        };

        dispatch(setToast(toastParams));
        setTimeout(() => {
            dispatch(resetToast());
        }, 5000);
    };

    return { handleToast };
};

export default useToast;
