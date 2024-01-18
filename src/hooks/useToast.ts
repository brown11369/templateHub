import { useDispatch } from "react-redux";
import { resetToast, setToast } from "../store/toastSlice";

interface ToastParams {
    isVisible: boolean;
    message: string;
}

const useToast = () => {
    const dispatch = useDispatch();

    const handleToast = async (isVisible: boolean, message: string): Promise<boolean> => {
        try {
            const toastParams: ToastParams = {
                isVisible,
                message,
            };
    
            dispatch(setToast(toastParams));

            // Using Promise-based setTimeout for better async handling
            await new Promise(resolve => setTimeout(resolve, 5000));
            
            dispatch(resetToast());
            
            return true;

        } catch (error) {
            console.error("Error handling toast:", error);
            return false;
        }
    };

    return { handleToast };
};

export default useToast;
